// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src/frontend',
  base: './',              // ← ensure paths like "./assets/…"
  plugins: [react()],
  build: {
    outDir: '../../dist/frontend',
    emptyOutDir: true,
  },
})
