import packageInfo from './package.json';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  publicPath: process.env.NODE_ENV === 'production' ? packageInfo.name : '/',
  resolve: {
    alias: {
      '@': './src',
    },
  },
};

export default config;
