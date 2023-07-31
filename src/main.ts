import { type Plugin } from 'vite'

export type RemoveReactDevtoolsOptions = {
  /**
   * @description Disabled React devtools in production
   * @default true
   */
  removeReactDevtools?: boolean
}

export function removeReactDevtools(options?: RemoveReactDevtoolsOptions): Plugin {
  const removeReactDevtools = options?.removeReactDevtools ?? true
  return {
    name: '@achmadk/vite-plugin-remove-react-devtools',
    enforce: 'pre',
    apply: 'build',
    transformIndexHtml(html) {
      if (removeReactDevtools) {
        return {
          html,
          tags: [
            {
              injectTo: 'body',
              tag: `script`,
              children: `if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') { window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};};`,
            },
          ],
        }
      }
      return html
    }
  }
}
