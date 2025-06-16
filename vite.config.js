import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',  // Ensure Vite uses the root of the project as the base directory
  base: '/library-display/',  // GitHub Pages base URL (adjust if necessary)
  build: {
    outDir: 'dist', // Output directory for the build
  },
});
