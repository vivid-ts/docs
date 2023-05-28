---
sidebar_position: 3
---

# Data Fetching

Vivid brings the power of [Axios](https://www.npmjs.com/package/axios) and [SWR](https://swr.vercel.app/) to your app. You can find the configuration file in the `src/plugins/axios.ts` file.

```ts title="src/plugins/axios.ts"
import Axios from 'axios';

export const axios = Axios.create({
  // Configure this to your own API usage
});
```

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

Vivid uses [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter) at the moment to mock API calls. You can register mock endpoints in the `src/@mock/handlers` directory.

```ts title="src/@mock/handlers/user.ts"
import type { User } from '@auth';
import type MockAdapter from 'axios-mock-adapter';

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

export default (mock: MockAdapter) => {
  mock.onGet('/user').reply(200, data);
};
```

To register the mock handler, you need to call `registerMock` with the axios instance.

```ts title="src/plugins/axios.ts"
import Axios from 'axios';
// highlight-next-line
import { registerMock } from '@mock';

export const axios = Axios.create({
  // Configure this to your own API usage
});

// highlight-next-line
registerMock(axios);
```

### Usage with SWR

```tsx title="src/pages/data/user.tsx"
import useSWR from 'swr';

export default function Users() {
  const { data } = useSWR<User[]>('/user');

  // ...
}
```

:::info

We are planning to migrate mocking to [MSW](https://mswjs.io/) in the future.

:::

## SWR

Vivid brings the power of SWR to supercharge your data fetching experience. By default, Vivid sets default fetcher globally in `src/pages/_app.tsx` file.