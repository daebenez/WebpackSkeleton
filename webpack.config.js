const path    = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HWP = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
       test: /\.scss$/,
       use: ExtractTextPlugin.extract(
         {
           fallback: 'style-loader',
           use: ['css-loader', 'sass-loader']
         })
     },
     {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
                loader: 'url-loader',
                options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[chunkhash]-[name].[ext]'
                }
            }]
          }
        ]
  },
  plugins:[
        new HWP({template:path.join(__dirname, '/src/index.html')})
    ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    contentBase: './dist'
  }
};
