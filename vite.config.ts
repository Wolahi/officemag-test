import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svg from 'vite-plugin-svgr';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svg({
      svgrOptions: {
        icon: true, // Enables SVGR's icon mode (https://react-svgr.com/docs/options/#icon)
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
});
