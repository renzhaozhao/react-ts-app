import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [react()],
  // css预处理
  css: {
    postcss: {
      // plugins: [require('autoprefixer')],
    },
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/config/variable.less'
          )}";`,
          // 'primary-color': '#26334d',
        },
        javascriptEnabled: true,
      },
    },
  },
})
