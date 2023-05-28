---
sidebar_position: 2
---

# Configuration

You can configure Vivid by editing the `src/config.tsx` file.

```ts title="src/config.tsx"
import { House, User } from '@phosphor-icons/react';
import type { NavigationEntry } from './router';

export const brand = {
  name: 'Vivid',
  logo: '/vivid.svg',
};

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

:::tip

Read more about navigation in the [Navigation](/docs/guides/navigation) guide.

:::