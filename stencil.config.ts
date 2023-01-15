import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodePolyfills from 'rollup-plugin-node-polyfills';


export const config: Config = {
  namespace: 'stencil-design-system',
  globalScript: 'src/index.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass()
  ],
  rollupPlugins: {
    after: [
      nodePolyfills(),
    ]
  },
  extras: {
    cloneNodeFix: true,
    experimentalImportInjection: true,
  },
};
