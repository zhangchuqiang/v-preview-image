import { defineConfig } from 'vite' // 动态配置函数
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const resolvePath = (dir) => {
  return resolve(__dirname, dir)
}

export default () =>
  defineConfig({
    plugins: [createVuePlugin(), cssInjectedByJsPlugin()],
    build: {
      outDir: 'dist',
      lib: {
        entry: resolvePath('./src/index.js'),
        name: 'VPreviewImage',
        formats: ['es'],
        fileName: 'v-preview-image'
      },
      rollupOptions: {
        input: resolvePath('./src/index.js'),
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  })
