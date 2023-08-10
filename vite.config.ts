import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

const resolvePath = (dir: string) => {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: resolvePath('./src'),
      rollupTypes: true
    }),
    cssInjectedByJsPlugin()
  ],
  build: {
    outDir: 'dist', 
    lib: {
      entry: resolvePath('./src/index.ts'),
      name: 'VPreviewImage',
      formats: ['es'],
      fileName: 'v-preview-image'
    }, 
    rollupOptions: {
      input: resolvePath('./src/index.ts'),
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
