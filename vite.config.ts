import { resolve } from 'path';
import typescript2 from 'rollup-plugin-typescript2';
import compress from 'vite-plugin-compress';
import handlebars from 'vite-plugin-handlebars';
import { minifyHtml } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';

const config = {
  plugins: [
    compress({
      brotli: false
    }),
    minifyHtml(),
    VitePWA(),
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
    {
      ...typescript2(),
      apply: 'build',
    },
  ],
};

export default config;
