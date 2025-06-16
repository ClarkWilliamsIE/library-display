import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for building the project
export default defineConfig({
  plugins: [react()],
  base: '/library-display/',  // GitHub Pages base URL (adjust if needed)
  build: {
    outDir: 'dist',  // Output directory for the build
  },
});
