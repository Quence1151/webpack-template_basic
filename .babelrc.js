// // .babelrc.js

const { plugins } = require("./webpack.config");

module.exports = {
    presets: ['@babel/preset=env'],
    plugins: [
        ['@babel/plugin-transform-runtime']
    ]
}