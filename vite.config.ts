import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'vitePluginRemoveReactDevtools',
      fileName: 'index'
    },
    sourcemap: true,
    target: ['node16', 'node18']
  },
  plugins: [
    dts()
  ]
})
