---
sidebar_position: 2
---

# Configuration

We provide you a flexible way to configure Vivid's behaviour. You can find the configurations in `src/config.tsx` file.

## Brand

You can configure the branding of your app by changing the `brand` object.

```ts title="src/config.tsx"
import type { Brand } from './types/config';

export const brand: Brand = {
  name: 'Vivid',
  logo: '/vivid.svg',   // relative to public folder
};
```

## API

Since Vivid brings the capability for a flexible data fetching, you can configure it by changing the `api` object.

```ts title="src/config.tsx"
import type { API } from './types/config';

export const api: API = {
  enableMocking: true,
  axios: {
    baseURL: '/api',
  },
};
```

:::tip

Read more about [Data Fetching](/docs/guides/plugins/data-fetching).

:::

## Navigation

You can configure the sidebar navigation by changing the `navigation` object.

```ts title="src/config.tsx"
import type { Navigation } from './types/config';

export const navigation: Navigation = [
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