import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import packageInfo from './package.json';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  // Draft to deploy different than Github Pages, i.e. Netlify
  // base: process.env.NODE_ENV === 'production' ? `/${packageInfo.name}/` : '/',
  base: `/${packageInfo.name}/`,
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, '/index.html'),
        about: resolve(root, '/about.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': root,
      '~': resolve(__dirname, '/node_modules'),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
};

export default config;
