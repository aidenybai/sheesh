import legacy from '@vitejs/plugin-legacy';
import typescript2 from 'rollup-plugin-typescript2';
import compress from 'vite-plugin-compress';
import { minifyHtml, injectHtml } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';

const injectProps = {};

const config = {
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    minifyHtml(),
    compress(),
    VitePWA(),
    injectHtml(injectProps),
    {
      ...typescript2(),
      apply: 'build',
    },
  ],
};

export default config;
