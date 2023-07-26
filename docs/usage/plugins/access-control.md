---
sidebar_label: Access Control
---

# Access Control List (ACL)

Vivid uses [CASL](https://casl.js.org/v6/en/) under the hood for access control. You can find the configuration in the `src/plugins/casl.ts`.

```ts title="src/plugins/casl.ts"
import { PureAbility, type SubjectRawRule } from '@casl/ability';

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
export type Subjects = 'all' | 'user' | 'other';
export type Rules = SubjectRawRule<Actions, Subjects, unknown>[];

export const ability = new PureAbility<[Actions, Subjects]>([
  // Default Ability here
]);
```

:::tip

Make sure you read CASL's [documentation](https://casl.js.org/v6/en/) to understand how it works.

:::

## Usage in general

You can directly use the `ability` object in your components. For example:

```tsx title="src/pages/Profile.tsx"
import { ability } from '@casl';

export default function Profile() {
  // highlight-next-line
  const canUpdate = ability.can('update', 'user');

  return (
    <div>
      {/* ... */}

      {canUpdate && <button>Update Profile</button>}
    </div>
  );
}
```

## Limiting access to routes

You can limit access to specific routes by defining `acl` options in the [Page Handle](/docs/usage/pages#configuring-a-page). For example:

```tsx title="src/pages/Profile.tsx"
import type { HandleFunctionResolver } from '@/router';

// ...

export const Handle: HandleFunctionResolver = () => ({
  title: 'Profile',
  // highlight-start
  acl: {
    action: 'read',
    subject: 'user',
  },
  // highlight-end
});
```

:::info

Vivid will render [`NotAvailable`](/docs/usage/layouts#view-layouts) layout if the user does not have access to the page.

:::

## Updating the ability

If your user has an `abilities` property, you can use it to update the ability. For example while resolving the user in `src/plugins/auth.ts`:

```ts title="src/plugins/auth.ts"
import { defineResolve } from '@/lib/core/auth';

export const resolve = defineResolve(async () => {
  // mocked user
  const res = await axios.get<User>('/me');
  const user = res.data;

  // Update the ability here
  // highlight-next-line
  ability.update(user.abilities);

  return user;
});
```