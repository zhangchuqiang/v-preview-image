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
    outDir: 'dist', //输出文件名称
    lib: {
      entry: resolvePath('./src/index.ts'), //指定组件编译入口文件
      name: 'VPreviewImage',
      formats: ['es'],
      fileName: 'v-preview-image'
    }, //库编译模式配置
    rollupOptions: {
      input: resolvePath('example/main.ts'),
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    } // rollup打包配置
  }
})
