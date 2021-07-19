const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    mode: 'development',
    entry: {
        home:'./src/pages/home/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    
        // publicPath: '/public',
    },
    //   module :{
    //       rules : ['']
    //   },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/pages/home/index.html',
            chunks:['home'],
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        // compress: true,
        port: 9000,
    },
};