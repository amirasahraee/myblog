const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    watch: true,
    mode: 'development',
    entry: {
        home: './src/pages/home/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'assets/js/[name].js',
        assetModuleFilename : 'assets/fonts/[name].[ext]'
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
            chunks: ['home'],
            path: path.join(__dirname, 'build'),
            filename: 'index.html',
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 3000,
    },
};