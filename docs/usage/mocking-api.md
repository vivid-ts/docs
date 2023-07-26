# Mocking API

You can mock API request and responses even without any backend running. Vivid uses [MSW](https://mswjs.io/) to mock API requests. You can find the mock handlers in the `src/@mock/handlers` directory.

## Prerequisites

Before you can start mocking API requests, you have to initialize the service worker.

```bash npm2yarn
npm run mock:init
```

## Enable Mocking

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

## Declare Mock Handlers

Every file in the handler directory will be automatically loaded, similar to the file-system routing. You can find the mock handlers in the `src/@mock/handlers` directory.

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
