import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        background: 'src/background.ts',
      },
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        chunkFileNames: `[name].js`,
      },
    },
  },
})