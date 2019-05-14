const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    index: path.join(__dirname, '../client/server-entry.js'),
  },
  output: {
    filename: 'server-entry.js',
    path: path.join(__dirname, '../dist'),
    publicPath:'/public',
    libraryTarget: 'commonjs2'
  },
  plugins: [],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        },
        vendor: {
          chunks: "initial",
          test: path.resolve(__dirname, "node_modules"),
          name: "vendor",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      use:{
        loader: 'babel-loader'
      }
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use:{
        loader: 'babel-loader'
      }
    }]
  }
};