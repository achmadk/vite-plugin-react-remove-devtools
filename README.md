# :package: `@achmadk/vite-plugin-react-remove-devtools`

## Table of Contents
1. [Description](#memo-description)
1. [Prerequisites](#prerequisites)
1. [Installation](#wrench-installation)
1. [Usages](#bike-usages)
1. [Inspirations](#💡-inspirations)
1. [License](#🪪-license)

## :memo: Description
Hey there! :clap:

`@achmadk/vite-plugin-react-remove-devtools` is this cool Vite plugin that lets us keep the React DevTools indicator hidden, even when using the React library to build our web app. Pretty neat, huh?

Just a quick heads up - this plugin is specifically designed for Vite and not for Rollup. Here's why:

1. The plugin is called with the `pre` enforce value.
2. It's activated only when you use the `vite build` command.

Hope this helps! 😊

## Prerequisites
Before we get started, make sure you have these essentials ready:

1. The most recent LTS version of Node (v18) 🌐
2. If you're using a package manager other than `npm`, grab the latest version of your favorite one (`yarn`, `pnpm`) 📦
3. Don't forget to install the newest version of Vite (v4) ⚡

Happy coding! 🚀

## :wrench: Installation
Just type this command like this

```bash
npm i @achmadk/vite-plugin-react-remove-devtools # npm
yarn add @achmadk/vite-plugin-react-remove-devtools # yarn
pnpm add @achmadk/vite-plugin-react-remove-devtools # pnpm
```

into your favorite CLI, and you'll be all set. 😊

## :bike: Usages

Let's go ahead and add `removeReactDevtools` method from `@achmadk/vite-plugin-react-remove-devtools` to your Vite config. It's super easy! 😊

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or import react from '@vitejs/plugin-react-swc'
import { removeReactDevtools } from '@achmadk/vite-plugin-react-remove-devtools'

export default defineConfig({
  plugins: [
    removeReactDevtools(),
    react()
  ]
})
```

Just so you know, the `removeReactDevtools` method has an option with the same name, `removeReactDevtools`, which is set to `true` by default. If you'd like, you can change its value to `false`. 😊

```diff
export default defineConfig({
  plugins: [
-    removeReactDevtools(),
+    removeReactDevtools({ removeReactDevtools: false }),
    react()
  ]
})
```

## 💡 Inspirations
Hey there! I just wanted to give a big thumbs up to the fantastic [vite-preset-react](https://github.com/PuruVJ/vite-preset-react) plugin by [Puru Vijay](https://github.com/PuruVJ). I borrowed the source code for the remove react devtools feature from it to create this plugin. 😊 By the way, I accidentally included Puru's MIT license in the LICENSE file instead of mine. My bad!

## 🪪 License
[MIT](./LICENSE)
