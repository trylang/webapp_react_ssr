const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
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
  },

}