import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';
import json from '@rollup/plugin-json';


export default {
  input: './dist/index.js',
  plugins: [
    json(),
    clear({ target: './lib' }),
    babel({
      exclude: [
        'node_modules/**',
        '**/*.spec.ts',
      ], // 只编译我们的源代码
      extensions: ['ts', 'js'],
    }),
    nodeResolve(),
  ],
  output: [
    {
      file: 'lib/gps-distance-es.esm.js',
      format: 'esm'
    },
    {
      file: 'lib/gps-distance-es.esm.min.js',
      format: 'esm', plugins: [terser()]
    },
    {
      file: 'lib/gps-distance-es.cjs.js',
      format: 'cjs'
    },
    {
      file: 'lib/gps-distance-es.cjs.min.js',
      format: 'cjs', plugins: [terser()]
    },
    {
      file: 'lib/gps-distance-es.umd.js',
      format: 'umd',
      name: "EnigmaCore"
    },
    {
      file: 'lib/gps-distance-es.umd.min.js',
      format: 'umd', plugins: [terser()],
      name: "EnigmaCore"
    }
  ]
};