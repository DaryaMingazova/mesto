const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  //вход
  entry:{
		main: './src/scripts/pages/index.js',
  },
  //куда сложить результаты сборки
  output:{
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  devServer:{
    static:{
      directory: path.resolve(__dirname,'build'),
    },
    open: true,
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: "images/[name].[hash][ext]"
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name].[hash][ext]"
        },
      },
      {
        test:  /\.css$/,
        use: [        //модули css
        MiniCssExtractPlugin.loader, 
        {
          loader: 'css-loader'
        }
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlagin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
};