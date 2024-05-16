import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://webjanshop.onrender.com",
      "/uploads/": "https://webjanshop.onrender.com",
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
