---
sidebar_position: 1
---

# Pages

Originally inspired by [Next.js](https://nextjs.org/docs/basic-features/pages), Vivid uses the file-system routing approach to create pages. This means that every file inside the `pages` directory is treated as a page.

:::note

Under the hood, Vivid uses [Generouted](https://github.com/oedotme/generouted/) to generate routes from the `pages` directory. You can find the custom router handler in the `src/router` directory.

:::

## Creating a Page

Essentially, you just need to export a React component from a file inside the `pages` directory. For example, let's create a `src/pages/about.tsx` file with the following content:

```tsx title="src/pages/about.tsx"
import { Card } from '@mantine/core';

export default function About() {
  return (
    <Card>
      <h1 className="text-3xl font-semibold mb-2 dark:text-zinc-200">
        Hey there!
      </h1>
      <p className="text-base-300 dark:text-base-50">
        This is <b>Vivid</b>!
      </p>
    </Card>
  );
}
```

:::tip

Vivid brings [Mantine](https://mantine.dev/) UI framework and [Tailwind CSS](https://tailwindcss.com/) out of the box. You can use them to style your pages.

:::

## Configuring a Page

For example, by default, the about page will require [authentication](/docs/guides/plugins/authentication) and uses the `AdminLayout` component. You can change this by exporting `Handle` function.

```tsx title="src/pages/about.tsx"
import { Card } from '@mantine/core';
// highlight-next-line
import type { HandleFunctionResolver } from '@/router';

export default function About() {
  return (
    <Card>
      <h1 className="text-3xl font-semibold mb-2 dark:text-zinc-200">
        Hey there!
      </h1>
      <p className="text-base-300 dark:text-base-50">
        This is <b>Vivid</b>!
      </p>
    </Card>
  );
}

// highlight-start
export const Handle: HandleFunctionResolver = () => ({
  title: 'About', // Page title
  authedOnly: false, // Disable authenticated only
  layout: 'blank', // Use blank layout
});
// highlight-end
```

:::info

You might wonder, why the `Handle` is exported as `Handle` instead of `handle`? and why it's exported as a function instead of an object?

This is because to ensure HMR (Hot Module Replacement) works properly. You can [read more](https://github.com/vitejs/vite-plugin-react-swc#consistent-components-exports) about `consistent-components-exports` in the Vite plugin React SWC documentation.

:::

:::tip

[Read more](/docs/api/handle) about the `Handle` API.