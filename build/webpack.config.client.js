const path = require('path');
const webpack = require('webpack');

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

const config = merge(baseConfig, {
  mode: 'development',
  entry: {
    index: path.join(__dirname, '../client/app.js'),
  },
  output: {
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.join(__dirname, '../client/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
});

if (isDev) {
  config.entry = [
    'react-hot-loader/patch',
    path.join(__dirname, '../client/app.js'),
  ];

  config.devServer = {
    host: '0.0.0.0', // 设置host比location或者本机ip:127.0.0.1 好的地方就是可以方便其他开发者访问我们得机器进行调试
    port: '8888',
    contentBase: '../dist', // 或者 path.join(__dirname, '../dist')
    hot: true,
    overlay: { 
      errors: true // 代码出错时会出现错误蒙层
    },
    publicPath: '/public',
    historyApiFallback: {  // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html， 还可重写，非常有用。
      index: '/public/index.html'
    }
  }
}

module.exports = config;