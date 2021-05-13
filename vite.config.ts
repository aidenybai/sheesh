import { defineConfig } from 'vite';
import createImportPlugin from 'vite-plugin-import';
import { minifyHtml } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [
    createImportPlugin([
      {
        libraryName: 'lucia',
      },
    ]),
    viteSingleFile(),
    minifyHtml(),
  ],
});
