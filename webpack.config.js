const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    watch: true,
    mode: 'development',
    entry: {
        home: './src/pages/home/index.js',
        post: './src/pages/post/index.js',
        awesome: 'font-awesome/scss/font-awesome.scss'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'assets/js/[name].[hash].js',
        assetModuleFilename: 'assets/fonts/[name].[ext]',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.s(a|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name][hash].css',
            chunkFilename: 'assets/css/[id].[hash].css'
        }),
        new htmlWebpackPlugin({
            template: './src/pages/home/index.html',
            chunks: ['awesome', 'home'],
            path: path.join(__dirname, 'build'),
            filename: 'index.html',
        }),
        new htmlWebpackPlugin({
            template: './src/pages/post/index.html',
            chunks: ['awesome', 'post'],
            filename: 'post',
            path: path.join(__dirname, 'build'),
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 3000,
        proxy: {
            '/api/*': 'http://192.168.2.123:8000',
            '/admin/*': 'http://192.168.2.123:8000',
            '/static/*': 'http://192.168.2.123:8000',
        },
    },
};