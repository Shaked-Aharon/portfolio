import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'CNAME', // Path to your CNAME file in the project root
          dest: '.'     // Destination in the build folder
        }
      ]
    })
  ],
  base: './',
  build: {
    outDir: 'docs',
  }
})
