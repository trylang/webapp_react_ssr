const path = require('path');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');


module.exports = merge(baseConfig, {
  mode: 'production',
  target: 'node',
  entry: {
    index: path.join(__dirname, '../client/server-entry.js'),
  },
  output: {
    filename: 'server-entry.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [],
});