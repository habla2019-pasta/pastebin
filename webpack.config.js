const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  optimization: {
    usedExports: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3030,
    hotOnly: true,
    writeToDisk: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'pastebin',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.txt$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: 'raw-loader'
      }],
  },
};