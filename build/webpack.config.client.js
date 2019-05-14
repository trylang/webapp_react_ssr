const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, '../client/app.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath:'/public'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.join(__dirname, '../client/index.html')
    }),
    // new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
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