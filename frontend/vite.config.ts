import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
		port: 3000,
		watch: {
			usePolling: true
		},
    proxy: {
      '/api': {
        target: 'http://backend:5001',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
})
