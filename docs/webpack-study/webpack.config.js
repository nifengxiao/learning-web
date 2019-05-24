//这个配置文件，其实就是一个js文件，通过node中的模块操作，向外保留了一个配置对象

const path = require('path')
// //启用热更新第二步
// const webpack = require('webpack')
//导入htmlWebpackPlugin
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口，表示要使用webpack打包哪个文件
    output: { //输出文件相关的配置
        path: path.join(__dirname, './dist'), //指定打包号的文件输出到哪个目录中去
        filename: 'budle.js' //这是指定输出的文件名称
    },
    // devServer:{ //这是配置dev-server命令参数第二种形式，相对来说，这种方式麻烦一些
    //     open:true, //自动打开浏览器
    //     port:3000, //设置启动时候的运行端口
    //     contentBase:'src',  //指定托管的根目录
    //     hot:true    //启用热更新第一步
    // },
    plugins: [ //
        // new webpack.HotModuleReplacementPlugin() //启用热更新的第三步，new一个热更新的模块对象
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"), //指定模板页面
            filename: 'index.html' //指定页面的生成
        })
    ],
    module: {    //这个节点，配置所有的第三方模块 加载器
        rules: [// 这个是第三方模块匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//配置处理.css文件的第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|bmp|jpeg)$/, use: 'url-loader?limit=8750&name=[hash:8]-[name].[ext]' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, //处理字体文件
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}