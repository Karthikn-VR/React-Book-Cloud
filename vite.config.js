import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  allowedHosts: ['react-book-cloud-1.onrender.com'],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
  }
})
