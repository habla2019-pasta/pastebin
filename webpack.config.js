const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, options) => {
  console.log('Webpack build mode', options.mode ?? 'development');
  return {
    target: 'web',
    mode: options.mode ?? 'development',
    entry: './src/index.js',
    stats: 'minimal',
    output: {
      clean: true,
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      usedExports: true,
    },
    devServer: {
      open: true,
      compress: false,
      contentBase: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      publicPath: '/',
      port: 3030,
      watchContentBase: true,
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        title: 'pastebin',
        template: 'index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx?)$/,
          include: path.resolve(__dirname, 'src'),
          exclude: [
            /.*\.test\.jsx?$/,
            /.*Test.jsx?$/,
            /node_modules/,
          ],
          use: 'babel-loader',
        },
        {
          test: /\.txt$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: 'raw-loader',
        },
      ],
    },
  };
};