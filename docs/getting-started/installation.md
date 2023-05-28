---
sidebar_position: 1
---

# Installation

Vivid is essentially just a custom tailored Vite project.

:::tip

Use the [Quick Guide](/docs/intro#get-started) to try out Vivid quickly.

:::

## Requirements

- [Node.js](https://nodejs.org/en/download/) version 16.14 or higher
- **(Optional)** [Yarn](https://yarnpkg.com/getting-started/install) version 1.22 or higher

## Project Scaffold

To start, you need to clone the repository:

```bash
git clone https://github.com/vivid-ts/vivid.git
```

:::note

Currently, that is the only way to get started with Vivid.

:::

Vivid project requires you to use [TypeScript](https://www.typescriptlang.org/) for better type safety and linting.

## File Structure

```bash
vivid
├── index.html
├── LICENSE
├── package.json
├── postcss.config.js
├── public
│   └── vivid.svg
├── README.md
├── src
│   ├── components
│   │   ├── Head
│   │   ├── Metadata
│   │   ├── Navbar
│   │   └── ThemeSwitch
│   ├── config.tsx
│   ├── hooks
│   │   ├── useCurrentPage.ts
│   │   ├── useGlobalState.ts
│   │   └── useUser.ts
│   ├── index.css
│   ├── layouts                       # Built-in Layouts
│   │   ├── admin
│   │   ├── blank
│   │   ├── index.tsx
│   │   ├── not-available
│   │   └── splash
│   ├── lib
│   │   ├── acl
│   │   ├── core
│   │   └── theme
│   ├── main.tsx                      # Entry point
│   ├── @mock                         # Mock API for axios
│   │   ├── handlers                  # Mock handlers
│   │   └── index.ts
│   ├── pages                         # File based routing
│   │   ├── 404.tsx
│   │   ├── _app.tsx
│   │   ├── data
│   │   ├── index.tsx
│   │   └── login.tsx
│   ├── plugins                       # Usable Plugins
│   │   ├── auth.ts
│   │   ├── axios.ts
│   │   └── casl.ts
│   ├── router                        # Router functions
│   │   └── index.tsx
│   ├── types
│   │   └── global.d.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## Running the development server {#dev-server}

Since Vivid is built on top of [Vite](https://vitejs.dev/), you can use the following command to start the development server to preview your changes.

```bash npm2yarn
cd vivid
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see running instance.

## Building for production {#build}

To build the application for production, use the following command:

```bash npm2yarn
npm run build
```

This will create a `dist` folder with all the static files that you can deploy to your server.