// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Ensure that tests run in a browser-like environment
    globals: true,        // Makes it unnecessary to import `describe`, `it`, etc.
  },
});
