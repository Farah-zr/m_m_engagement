import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    },
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  }
  // server: {
  //   proxy: {
  //     '/upload': {
  //       target: 'https://m-m-engagement-mjxgr5qnw-farahs-projects.vercel.app',
  //       changeOrigin: true,
  //       secure: true
  //     }
  //   }
  // }
})
