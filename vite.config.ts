import { minifyHtml } from 'vite-plugin-html';

const config = {
  plugins: [minifyHtml()],
};

export default config;
