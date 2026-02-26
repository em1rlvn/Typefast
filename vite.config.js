import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/typefast/',
  resolve: {
    alias: {
      '@components': '/src/components'
    }
  }
})