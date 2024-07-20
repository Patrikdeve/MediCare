import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, 
    proxy: {
      '/api': 'https://medicare-backend-4dz2.onrender.com',
    }
  }, 
})
