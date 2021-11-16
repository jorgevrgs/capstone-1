import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import packageInfo from './package.json';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  publicPath: process.env.NODE_ENV === 'production' ? packageInfo.name : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
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
