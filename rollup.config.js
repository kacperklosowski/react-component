const sass = require('rollup-plugin-sass');
const typescript = require('rollup-plugin-typescript2')

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [sass({ insert: true }), typescript()],
  external: ['react', 'react-dom']
}