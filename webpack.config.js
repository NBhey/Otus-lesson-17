const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  target: 'browserslist',
  entry:'./src/getUserData.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
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
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static:  {
      directory: path.join(__dirname, 'dev'),
    },
    compress: false,
    port: 3000,
    hot:true
  },
};