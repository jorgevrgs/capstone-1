import { resolve } from 'path';
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
};

export default config;
