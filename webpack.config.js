const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, options) => {
  console.log('Webpack build mode', options.mode ?? 'development');
  return {
    devServer: {
      compress: false,
      contentBase: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      open: true,
      port: 3030,
      publicPath: '/',
      watchContentBase: true,
    },
    entry: './src/index.js',
    mode: options.mode ?? 'development',
    module: {
      rules: [
        {
          exclude: [
            /.*\.test\.jsx?$/,
            /.*Test.jsx?$/,
            /node_modules/,
          ],
          include: path.resolve(__dirname, 'src'),
          test: /\.(js|jsx?)$/,
          use: 'babel-loader',
        },
        {
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
          test: /\.txt$/,
          use: 'raw-loader',
        },
      ],
    },
    optimization: {
      usedExports: true,
    },
    output: {
      clean: true,
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
        title: 'pastebin',
      }),
    ],
    stats: 'minimal',
    target: 'web',
  };
};