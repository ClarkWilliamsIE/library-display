import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Make sure Vite uses the root of the project as the base directory
  base: '/library-display/', // Adjust this if your GitHub Pages repository name is different
  build: {
    outDir: 'dist', // Output directory for the build
    rollupOptions: {
      input: '/public/index.html', // Explicitly set the input file to index.html
    },
  },
});
