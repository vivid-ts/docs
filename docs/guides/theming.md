---
sidebar_position: 3
---

# Theming

Vivid primarily relies on [Tailwind CSS](https://tailwindcss.com/) for styling. You can find the configuration file in the `tailwind.config.js` file.

```js title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
export default {
  // ...
  theme: {
    extend: {
      // ...
      colors: {
        primary: {
          DEFAULT: '#069B94',
          50: '#60F9F2',
          100: '#4CF8F0',
          200: '#25F7ED',
          300: '#09EADF',
          400: '#08C2BA',
          500: '#069B94',
          600: '#057E78',
          700: '#04605C',
          800: '#034340',
          900: '#012523',
        },
        secondary: {
          DEFAULT: '#DD61CB',
          50: '#FEF8FD',
          100: '#FAE7F7',
          200: '#F3C6EC',
          300: '#EBA4E1',
          400: '#E483D6',
          500: '#DD61CB',
          600: '#D333BC',
          700: '#A92496',
          800: '#7B1B6D',
          900: '#4D1144',
        },
        accent: {
          DEFAULT: '#56B2EF',
          // ...
        },
        neutral: {
          DEFAULT: '#1D141F',
          // ...
        },
        base: {
          DEFAULT: '#2E3661',
          // ...
        },
        info: {
          DEFAULT: '#4A6BC4',
          // ...
        },
        success: {
          DEFAULT: '#20B161',
          // ...
        },
        warning: {
          DEFAULT: '#F7CF4A',
          // ...
        },
        error: {
          DEFAULT: '#E8574F',
          // ...
        },
      },
    },
  },
  plugins: [],
};
```

:::info

The theme scheme is inspired by [DaisyUI](https://daisyui.com/).

:::

## Mantine

Vivid will automatically brings the color scheme from Tailwind CSS to [Mantine](https://mantine.dev/). You can find the configuration file in `src/lib/theme/mantineConfig.ts` file.

Vivid also already pre-configured some custom styles to the Mantine components.

```ts title="src/lib/theme/mantineConfig.ts"
export const mantineConfig: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  colors: {
    ...themeColors,
    dark: themeColors.base,
    light: themeColors.accent,
  },

  primaryColor: 'primary',
  primaryShade: 5,

  defaultRadius: 'md',

  components: {
    // ...
  },
};
```