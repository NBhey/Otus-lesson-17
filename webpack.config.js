const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'production',
  target: 'browserslist',
  entry:'./src/index.js',
  output: {
    filename: 'main.js',
  },
  module: {
    rules: [
      {
         test: /\.txt$/, use: 'raw-loader'
      },
      {
        test: /\.html$/, 
        use: 'html-loader'
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ["babel-loader"]
      // }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Webpack App", // это попадет в <title/>
    filename: "index.html", // название файла после сборки
    template: "dist/index.html", // где брать шаблон
  })],
  devServer: {
    static:  {
      directory: path.join(__dirname, 'dist'),
    },
    compress: false,
    port: 3000,
    hot:true
  },
};