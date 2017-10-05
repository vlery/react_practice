/**
 * Created by vlery on 2017/10/4.
 */
const path =require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css"
});
module.exports = {
  entry: {
          index: "./app/index.js",
          demo1:"./app/demo1.js",
          demo2:"./app/demo2.js",
          demo3:"./app/demo3.js",
          demo4:"./app/demo4.js",
          demo5:"./app/demo5.js",
          style:"./app/css.js"


  },
  output: {
    path: path.join(__dirname,"/dist/"),    // 所有输出文件的目标路径，绝对路径！
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test:  /\.js$/,                //babel-loader将其他文件解析为js文件
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015","react"]  //babel-loader需要解析的文件
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
         use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    options: { url: false }
                }, {
                    loader: "sass-loader",
                }]
            })

      }

    ]
  },

  plugins:[
      extractSass

  ]
};
