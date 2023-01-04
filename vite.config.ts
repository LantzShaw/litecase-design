import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import path from 'path';
// import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [vue(), DefineOptions()], // dts()
  build: {
    target: 'modules',
    // 打包文件目录
    outDir: 'es',
    // 压缩
    minify: false,
    // css分离
    // cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'packages/index'),
      name: 'litecase-design',
      fileName: (format) => `bundle.${format}.js`
      // formats: ['es', 'cjs'] // iife(自调用函数)
      // umd：打包后代码很紧凑、体积小，但是不易读；
      // es：打包后的代码和我们写的代码很像，易读，但是体积大。 \
      // js.map: 调试代码
    },
    sourcemap: false, // 输出.map文件
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖 忽略打包vue文件
      // external: ['vue', 'ant-design-vue'],
      external: ['vue'],
      output: [
        {
          format: 'es',
          // 不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'dist/es',
          preserveModulesRoot: 'packages',
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
            // 'ant-design-vue': 'ant-design-vue'
          }
        },
        {
          format: 'cjs', // common js
          // 不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'dist/lib',
          preserveModulesRoot: 'packages',
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
            // 'ant-design-vue': 'ant-design-vue'
          }
        }
      ]
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
