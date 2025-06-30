import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  //base: '/week3-react-app/', // Set the base to your repository name
  plugins: [
    react(),
    tailwindcss(),
  ],
})
