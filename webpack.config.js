const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
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
    // clientLogLevel: 'silent',
    // compress: false,
    contentBase: path.join(__dirname, 'dist'),
    // historyApiFallback: true,
    // inline: true,
    // overlay: true,
    port: 3030,
    watchContentBase: true,
    watchOptions: {
      poll: true,
      ignored: '/node_modules/'
    }// proxy: {},
    // serveIndex: true,
    // hot: true,
    // writeToDisk: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'pastebin',
      template: 'index.html'
    }),
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