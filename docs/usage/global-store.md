# Global Store

Vivid uses [Zustand](https://github.com/pmndrs/zustand) under the hood for global state management. You can find the store in the `src/hooks` directory.

```ts title="src/hooks/useGlobalState.ts"
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { Page } from './useCurrentPage';

export const useGlobalState = create(
  combine(
    {
      loading: true,

      currentPage: null as Page | null,
    },
    (set) => ({
      setLoading: (loading: boolean) => set({ loading }),
      setCurrentPage: (currentPage: Page | null) => set({ currentPage }),
    }),
  ),
);
```

### Loading State

Vivid uses `loading` state to determine whether the app is still loading or not. This state is used to display the splash screen.

:::tip

You can find the function that take cares for the initiation of the app in `src/lib/core/init.ts`. You can also read about [Authenticating](/docs/usage/plugins/authentication) as it also have a role in the initiation of the app.

:::