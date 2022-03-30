//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports = {
    entry: './js/main.js',
    //결과물(번들)을 반환하는 과정
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',

    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    postcssLoader,
                    "sass-loader",
                ]
            }
            // {
            //     test: /\.js$/,
            //     use: [
            //         'babel-loader'
            //     ]
            // }
        ]
    },
    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],
    devServer: {
        host: 'localhost'
    }
}

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            config: path.resolve('./postcss.config.js'),
        }
    }
}