var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:path.resolve(__dirname,'src/js/main.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            { test: /\.(png|jpg|gif|bmp|jpeg)$/, use: 'url-loader' },
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            { test: /\.vue$/, use: 'vue-loader' },
            {test:/\.css$/,use:['style-loader','css-loader']},
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                     presets: ['@babel/preset-env'],
                     plugins: [
                          ['@babel/plugin-proposal-class-properties'],
                          ["@babel/transform-runtime"],
                         ["component", {
                              "libraryName": "mint-ui",
                              "style": true
                            }
                          ]
                     ]
                  }
                }
            }
        ]
    }
}