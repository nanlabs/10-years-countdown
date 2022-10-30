/* eslint-disable */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
/* eslint-enable */
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
});
