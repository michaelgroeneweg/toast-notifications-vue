import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [vue(), AutoImport({ imports: ['vue'], dts: true })],
  root: './demo',
})

// export default defineConfig(({ command, mode, ssrBuild }) => {
//   if (command === 'serve') {
//     return {
//       // dev specific config
//     }
//   } else {
//     // command === 'build'
//     return {
//       // build specific config
//     }
//   }
// })
