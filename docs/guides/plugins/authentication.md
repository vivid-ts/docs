---
sidebar_position: 1
---

# Authentication

Vivid brings way to authenticate and storing the user's session. You can customize the authentication flow by modifying the `auth` plugin.

## Prequesties

Before using any of the authentication features, you need to define some types to ensure type safety.

```ts title="src/plugins/auth.ts"
import { type Rules } from './casl';

export type User = {
  id: string;
  name: string;
  abilities: Rules;
  role: 'admin' | 'user';
  image?: string;
};

export type SignInOptions = {
  name: string;
  password: string;
};
```

:::info

`Rules` type comes from ACL feature in Vivid. You can read more about it in [Access Control](/docs/guides/plugins/access-control).

:::

**Both `User` and `SignInOptions` are required to be defined before using the authentication features as it will be used throughout the app.**

## Resolving User

This function will be always called when initializing the app. You can use it to resolve the user's session.

```ts title="src/plugins/auth.ts"
import { defineResolve } from '@/lib/core/auth';

// ...

export const resolve = defineResolve(async () => {
  // mocked user
  const res = await axios.get<User>('/me');
  const user = res.data;

  ability.update(user.abilities);

  return user;
});
```

:::tip

Read more about [Access Control](/docs/guides/plugins/access-control).

:::

## Signing In

While you entirely manages how users sign in, Vivid will automatically handles the session and the user's data.

```ts title="src/plugins/auth.ts"
import { defineSignIn } from '@/lib/core/auth';

// ...

export const signIn = defineSignIn<SignInOptions>(async (data) => {
  // mocked user
  const res = await axios.post<User>('/login', data);
  const user = res.data;

  ability.update(user.abilities);

  return user;
});
```

:::tip

Read more about [Access Control](/docs/guides/plugins/access-control).

:::

### Usage

After defining the `signIn` function, you can use it in your components.

```tsx title="src/pages/login.tsx"
import { signIn } from '@auth';
import { useForm } from '@mantine/form';
import { useNavigate } from '@/router/utils';

export default function Login() {
  // ...

  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      name: '',
      password: '',
    },
    validate: {
      name: (value) => value.trim().length <= 0 && 'Name is required',
      password: (value) => value.trim().length <= 0 && 'Password is required',
    },
  });

  const onSubmit = form.onSubmit(async (values) => {
    // highlight-next-line
    const u = await signIn(values);

    if (!u) {
      form.setErrors({
        name: 'Not allowed',
        password: 'Not allowed',
      });
    }

    navigate('/');
  });

  // ...
}
```

:::tip

Read more about [Mantine Form](https://mantine.dev/form/use-form/).

:::

## Signing Out

Similar to signing in, you can define the `signOut` function to handle the sign out process. The difference is, this function acts as a middleware before the user is actually logged out.

```ts title="src/plugins/auth.ts"
import { defineSignOut } from '@/lib/core/auth';
import { axios } from '@axios';

export const signOut = defineSignOut(async (user) => {
  // Do something with user before actually logged out
  // Example: send a request to the server to invalidate the session
  axios.post('/logout', user);
});
```

:::info

Read more about data fetching in [Data Fetching](/docs/guides/plugins/data-fetching).

:::

### Usage

You can use the `signOut` function in your components, for example:

```tsx title="src/components/SignOutButton.tsx"
import { ActionIcon } from '@mantine/core';
import { SignOut } from '@phosphor-icons/react';
import { signOut } from '@auth';

export const SignOutButton = () => (
  <ActionIcon color="red">
    // highlight-next-line
    <SignOut weight="bold" size={20} onClick={signOut} />
  </ActionIcon>
);
```