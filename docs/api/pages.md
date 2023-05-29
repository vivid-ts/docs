---
sidebar_position: 2
---

# Page

## Handle (Meta)

```ts
export type Meta = {
  title?: string;
  description?: string;

  layout?: Layouts;
  authedOnly?: boolean;
  acl?:
    | {
        action?: Actions;
        subject?: Subjects;
      }
    | false;
};

export type HandleFunctionResolver = () => Meta;
```
