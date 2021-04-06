<img src="./img/logo.svg" height="60" align="right" />

# tailwindcss flip

[tailwindcss](https://tailwindcss.com) plugin for adding RTL(right-to-left) support.

If your application needs to support multiple languages, then RTL support is a common requirement. Unfortunately, [tailwindcss](https://tailwindcss.com) doesn't have out-of-the-box support for RTL layout. There are few other plugins already exists like [tailwindcss-rtl](https://www.npmjs.com/package/tailwindcss-rtl) and [tailwindcss-dir](https://github.com/RonMelkhior/tailwindcss-dir). Both plugins generate variant styles, and you need to add those classes to the code; which is an additional effort if you already have an existing application.

**tailwindcss-flip** takes an approach were, no code change is required instead, we generate utility classes using `[dir=rtl]` html attribute css selector.

<img src="./img/demo.gif" />

## Installation

1. Install **tailwindcss-flip** package:

```
# Install using NPM
npm install tailwindcss-flip --save-dev

# Install using Yarn
yarn add tailwindcss-flip --dev
```

2. Add plugin to your `tailwind.conf.js` file:

```js
 plugins: [require("tailwindcss-flip")],
```

## How to use

Add `dir=rtl` attribute to the HTML tag or root element of your page. That's it, this plugin will automatically generate all the required utility classes for you.

You can check the [example](./example) folder to see the usage in a react application.
