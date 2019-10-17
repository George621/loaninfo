const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require("purifycss-webpack");
const webpack = require('webpack')
const glob = require('glob');

const website = {
  publicPath:'http://0.0.0.0:8888/'
}

module.exports = {
  mode:'development',
  //入口文件配置  main.js 入口文件
  entry:{
    main:'./src/main.js'
  },
  //出口文件配置
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'[name].js',
    publicPath:website.publicPath   //publicPath 处理静态文件路径
  },
  // 模块 解读css picture 
  module:{
    rules:[
      //css loader
      {
        test:/\.css$/,
        use: extractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          }),
      },
      //less loader
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "less-loader"
            },
            {
              loader: "postcss-loader"
            }
          ],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      //scss loader
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            },
            {
              loader: "postcss-loader"
            }
          ],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
       //图片 loader
       {
        test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
        use:[{
            loader:'url-loader', //是指定使用的loader和loader的配置参数
            options:{
                limit:500,  //是把小于500B的文件打成Base64的格式，写入JS
                outputPath:'images/',  // 图片打包到对应到文件夹下
            }
        }]
      },
      {
        test: /\.(htm|html)$/i,
         use:[ 'html-withimg-loader'] 
      },
      //babel 配置
      {
        test:/\.(jsx|js)$/,
        use:{
          loader:'babel-loader',
        },
        exclude:/node_modules/
      }
    ]
  },
  // 插件
  plugins:[
    new uglify(),
    new extractTextPlugin("css/index.css"),
    new webpack.HotModuleReplacementPlugin(),
    new htmlPlugin({
      minfy:{// 对html进行压缩
        removeAttributeQuotes:true  //removeAttrubuteQuotes是却掉属性的双引号。
      },
      hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS
      template:'./src/index.html' // html 模版路径和文件名
    }),
    // new PurifyCSSPlugin({ 
    //   //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
    //   //使用这个插件必须配合extract-text-webpack-plugin这个插件
    //   paths: glob.sync(path.join(__dirname, 'src/*.html')),
    //   }),
  ],
  //配置开发服务功能
  devServer:{
    //设置基本目录结构
    contentBase:path.resolve(__dirname,'../dist'),
    //服务器IP地址， 也可以是localhost 0.0.0.0
    host:'0.0.0.0',
    //服务端压缩是否开启
    compress:true,
    hot: true,
    //配置端口号
    port:8888
  }
}