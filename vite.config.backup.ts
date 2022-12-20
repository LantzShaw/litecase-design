import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';

const path = require('path');

export default defineConfig({
  plugins: [vue(), DefineOptions()],
  build: {
    outDir: 'lib',
    lib: {
      entry: path.resolve(__dirname, 'packages/index'),
      name: 'litecase-design',
      fileName: (format) => `bundle.${format}.js`,
      formats: ['umd']
      // umd：打包后代码很紧凑、体积小，但是不易读；
      // es：打包后的代码和我们写的代码很像，易读，但是体积大。 \
      // js.map: 调试代码
    },
    sourcemap: false, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ['vue', 'ant-design-vue'],
      external: ['vue'],
      output: {
        preserveModules: true,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
          // 'ant-design-vue': 'ant-design-vue'
        }
      }
    }
    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       javascriptEnabled: true,
    //       additionalData: '@import "./src/packages/index.less";',
    //     }
    //   }
    // }
  }
});
