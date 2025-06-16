import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/library-display/',  // Adjust this to match your GitHub Pages repo name
  build: {
    outDir: 'dist',  // The output directory for the build
  },
});
