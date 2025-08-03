// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    allowedHosts: [
      'react-book-cloud-1.onrender.com',
      'react-book-cloud-2.onrender.com',
      'react-book-cloud-3.onrender.com'
    ]
  }
})
