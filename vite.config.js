import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import removeConsole from "vite-plugin-remove-console";
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    removeConsole(),
    svgr(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/png/*',
          dest: 'assets/png'
        }
      ]
    })
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
