---
sidebar_position: 1
---

# Configuration

## Navigation

```ts title="@/router"
export type Meta = {
  title?: string;
  description?: string;

  layout?: Layouts;
  authedOnly?: boolean;
  acl?:
    | {
        action?: Actions;
        subject?: Subjects;
      }
    | false;
};
```

```ts
import type { Meta } from '@/router';

export type NavigationEntry = {
  name: string;
  children?: NavigationEntry[];
  path?: Path;
  acl?: Meta['acl'];
  icon?: JSX.Element;
  heading?: string;
};

export type Navigation = NavigationEntry[];
```

## Branding

```ts
export type Brand = {
  name: string;
  logo: string;
};
```

## API

```ts
import type { CreateAxiosDefaults } from 'axios';

export type API = {
  axios?: CreateAxiosDefaults;
  enableMocking?: boolean;
};
```

:::tip

Read more about [Access Control List](/docs/usage/plugins/access-control)

Read more about [Pages Router](/docs/usage/pages)

Read more about [Configuration usage](/docs/getting-started/configuration)

:::
