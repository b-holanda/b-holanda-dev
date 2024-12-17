import path from 'node:path'
import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

const base = '/'

// preserve this to test loading __filename & __dirname in ESM as Vite polyfills them.
// if Vite incorrectly load this file, node.js would error out.
globalThis.__vite_test_filename = __filename
globalThis.__vite_test_dirname = __dirname

export default defineConfig(({ command, ssrBuild, isSsrBuild }) => ({
  base,
  plugins: [
    vuePlugin(),
  ],
  experimental: {
    renderBuiltUrl(filename, { hostType, type, ssr }) {
      if (ssr && type === 'asset' && hostType === 'js') {
        return {
          runtime: `__ssr_vue_processAssetPath(${JSON.stringify(filename)})`,
        }
      }
    },
  },
  build: {
    minify: false,
  },
  ssr: {
    noExternal: [],
  },
  optimizeDeps: {
    exclude: [],
  },
}))
