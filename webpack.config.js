const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
  module: {

    // // entry : {app: './src/index.js',},

    // output:{
      
    //   // path: __dirname + '/public',
      
    //   filename: 'bundle.js'},


    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            
          }
        ]
      },
      
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },

  resolve: {
    fallback: {
      "crypto": false,
      "fs": false
  },
    extensions: ['', '.js', '.jsx', '.css']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};