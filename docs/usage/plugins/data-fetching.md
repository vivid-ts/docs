# Data Fetching

Vivid brings the power of [Axios](https://www.npmjs.com/package/axios) and [SWR](https://swr.vercel.app/) to your app. You can find the configuration file in the `src/plugins/axios.ts` file.

```ts title="src/plugins/axios.ts"
import Axios from 'axios';
import { api } from '@/config';

export const axios = Axios.create(api.axios);
```

:::tip

Read more about [Configuration](/docs/getting-started/configuration)

:::

By default, Vivid configures axios interceptor to automatically add the `Authorization` header to every request & redirects to the login page if the request returns `401` status code. 

```ts title="src/plugins/axios.ts"
axios.interceptors.request.use((c) => {
  const token = localStorage.getItem('token');

  if (token) {
    // eslint-disable-next-line no-param-reassign
    c.headers.Authorization = `Bearer ${token}`;
  }

  return c;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      useGlobalState.getState().currentPage?.id !== 'login'
    ) {
      router.navigate('/login');
    }

    return Promise.reject(error);
  },
);

```

## Mocking API

Vivid uses [MSW](https://mswjs.io/) to mock API requests. You can find the mock handlers in the `src/@mock/handlers` directory.

### Prerequisites

Before you can start mocking API requests, you have to initialize the service worker.

```bash npm2yarn
npm run mock:init
```

### Declare Mock Handlers

```ts title="src/@mock/handlers/user.ts"
import type { User } from '@auth';
import { rest } from 'msw';

const data: User[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'admin',
    image: 'https://i.pravatar.cc/256',
    abilities: [{ action: 'manage', subject: 'all' }],
  },
  // ...
];

export default [
  rest.get('/api/user', (_, res, ctx) => {
    return res(ctx.json(data));
  }),

  rest.get('/api/me', (_, res, ctx) => {
    return res(ctx.json(data[0]));
  }),

  rest.post('/api/login', (_, res, ctx) => {
    return res(ctx.json(data[0]));
  }),
];

```

### Enable Mocking

To enable mocking, you have to enable it in the configuration file.

:::caution

Mocking will be only enabled in the development environment, even if you set `enableMocking` to `true` in the production environment.

:::

```ts title="src/config.tsx"
export const api: API = {
  // highlight-next-line
  enableMocking: true,
};
```

## SWR

Vivid brings the power of SWR to supercharge your data fetching experience. By default, Vivid sets default fetcher globally in `src/pages/_app.tsx` file.

```tsx title="src/pages/data/user.tsx"
import useSWR from 'swr';

export default function User() {
  const { data } = useSWR<User[]>('/user');

  // ...
}
```