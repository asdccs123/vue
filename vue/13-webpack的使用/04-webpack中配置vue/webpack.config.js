const path=require('path')

module.exports = {
  entry:'./src/main.js',
  output:{
    //动态获取文件夹路径
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    //在涉及到url()的地方会自动在前面的路径上加上dist/
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        //css-loader只负责将css文件进行加载
        //style-loader负责将央视添加到dom中
        //使用多个loader时候，是从右向左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              //base64是指把一个文件转换含有其对应信息的base64字符串
              //当加载的图片，小于limit时，会将图片编译成base64字符串形式
              //当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 25000,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}