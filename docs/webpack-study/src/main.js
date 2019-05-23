//这个main.js 是我们项目的js入口文件

//导入jquery
//import *** from *** 是es6中导入模块的形式
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', 'red')
})

//命令格式: webpack 要打包的文件路径  输入的文件路径(然后会自动输出dist 和 打包后的main.js)
