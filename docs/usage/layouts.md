# Layouts

By default, Vivid comes with 2 usable layouts, and 2 view layout.

## View Layouts

View layout is essentially just a view wrapper. For example, Vivid exposes `NotAvailable` view layout, which is used to display 404 page.

```tsx title="src/layouts/not-available/index.tsx"
import { Button } from '@mantine/core';
import { SmileyXEyes } from '@phosphor-icons/react';
import { useNavigate } from '@/router/utils';

export interface NotAvailableProps {
  title?: string;
  description?: string;
}

export const NotAvailable = ({
  title = 'Not Allowed',
  description = 'You are not allowed to access this resource',
}: NotAvailableProps) => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col flex-grow w-full h-full justify-center items-center">
      <SmileyXEyes weight="fill" size={128} className="mb-4 text-base-500" />

      <h1 className="text-3xl mb-1 font-semibold text-base-600 dark:text-base-50">
        {title}
      </h1>
      <p className="text-base-100 mb-12">{description}</p>

      <Button onClick={() => navigate(-1)}>Go back</Button>
    </section>
  );
};
```

## Usable Layouts

Usable layouts are layouts that can be used as a page layout. For example, Vivid exposes `AdminLayout` and `BlankLayout`. By default, all pages uses `AdminLayout` as its layout.

:::tip

To differentiate between view layout and usable layout, essentially, usable layout accepts `children` prop, while view layout does not.

:::

## Custom Layouts

To define a custom layout, you can create a new file in `src/layouts` directory. For example, to create a new layout called `MyLayout`, you can create a new file called `my-layout.tsx` or `my-layout/index.tsx` in `src/layouts` directory.

```tsx title="src/layouts/my-layout.tsx"
import type { Page } from '@/hooks/useCurrentPage';

type MyLayoutProps = {
  children: React.ReactNode;
  page?: Page;
};

export const MyLayout = ({ children, page }: MyLayoutProps) => {
  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center">
      <h1>Very cool</h1>

      {children}
    </main>
  );
};

```

To expose it to the [Page Handle](/docs/usage/pages#configuring-a-page), you need to register it in `src/layouts/index.tsx`.

```tsx title="src/layouts/index.tsx"
// ...
import { MyLayout } from './my-layout';

export const layouts = {
  blank: BlankLayout,
  splash: SplashScreen,
  notAvailable: NotAvailable,
  admin: AdminLayout,
  // highlight-next-line
  myLayout: MyLayout, // Add your layout here
};
```

Now, you can use it in your page.

```tsx title="src/pages/about.tsx"
// ...

export const Handle: HandleFunctionResolver = () => ({
  title: 'About',
  authedOnly: false,
  // highlight-next-line
  layout: 'myLayout',
});
```