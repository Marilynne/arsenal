const webpack =require("webpack");//引入本地webpack模块
const HtmlWebpackPlugin =require("html-webpack-plugin");//引入本地webpack模块
const CleanWebpackPlugin =require("clean-webpack-plugin");//引入本地webpack模块
module.exports={
    // 指定打包入口的文件
    entry:__dirname+"/src/main.js",
    // src文件夹是手写文件
    // 指定输出文件地址及名称
    output:{
        // dist是存打包后文件的文件夹
        path:__dirname+"/dist",
        filename:"bundle.js"
        // bundle是打包后的js文件
    },
    // 建立一个本地服务
    devServer:{
        host:"localhost",
        port:8080,
        open:true,
        hot:true//开启热加载
    },
    module:{
        rules:[{
            text:/\.js$/,
            loader:"babel-loader",
            exclude:/node_modules/ //排除打包文件
        },{
            text:/\.css$/,
            use:["style-loader","css-loader"]
        },{
            text:/\.sass$/,
            use:[""]
        },{
            text:/\.png$/,
            loader:"file=loader"
        }]
    },
    //调错工具，开发时使用eval-source-map,发布时使用eval
    devtool:"eval-source-mao",//添加源码映射
    // 热加载
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//引入热加载模块
        new CleanWebpackPlugin(),//引入热加载模块
        new HtmlWebpackPlugin({
            template:__dirname+"/src/index.html"
        }),//引入热加载模块
    ]
}