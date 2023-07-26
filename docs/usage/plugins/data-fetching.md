# Data Fetching

## Axios

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
  }
);
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
