---
sidebar_position: 1
---

# Configuration

```ts
import type { CreateAxiosDefaults } from 'axios';

export type NavigationEntry = {
  name: string;
  children?: NavigationEntry[];
  path?: Path;
  acl?: Meta['acl'];
  icon?: JSX.Element;
  heading?: string;
};

export type Navigation = NavigationEntry[];

export type Brand = {
  name: string;
  logo: string;
};

export type API = {
  axios?: CreateAxiosDefaults;
  enableMocking?: boolean;
};
```

:::tip

Read more about [ACL API](./plugins/acl)

Read more about [Pages Router](/docs/usage/pages)

:::