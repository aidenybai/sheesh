import typescript2 from 'rollup-plugin-typescript2';
import compress from 'vite-plugin-compress';
import { minifyHtml } from 'vite-plugin-html';

const config = {
  plugins: [
    compress({
      brotli: false
    }),
    minifyHtml(),
    {
      ...typescript2(),
      apply: 'build',
    },
  ],
};

export default config;
