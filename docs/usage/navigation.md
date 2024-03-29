# Navigation

Vivid uses [React Router](https://reactrouter.com/) under the hood for navigation. While routing is [dynamically generated](/docs/usage/pages), you still need to configure sidebar navigation manually.

:::info

Automatic generation for sidebar navigation is planned for the future.

:::

Example:

<div className="flex gap-4">

<div className="flex-grow">

```tsx title="src/config.tsx"
import type { NavigationEntry } from './router';
import { House, User } from '@phosphor-icons/react';

// ...

export const navigation: NavigationEntry[] = [
  {
    name: 'Home',
    path: '/',
    icon: <House weight="fill" size={24} />,
    acl: {
      action: 'read',
      subject: 'other',
    },
  },
  {
    heading: 'Data',

    name: 'Users',
    path: '/data/user',
    icon: <User weight="fill" size={24} />,
    acl: false,
  },
];
```

</div>

![Navigation Preview](./img/navigation_preview.png)

</div>
