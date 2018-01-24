/**
 * Created by hcj on 2017/8/30.
 */
const path = require('path');
const fs = require('fs');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    devtool: "source-map",
    entry:  './src/index.tsx',
    output: {
        path: __dirname +  '/build',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js',  '.json']
    },
    module: {
        rules : [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },{
                enforce : 'pre',
                test: /\.js$/,
                loader : 'source-map-loader'
            }
        ]
    },
    externals : {
        'react' : 'React',
        'react-dom' : 'ReactDOM'
    },
    plugins : [
        new htmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template : './src/index.html'
        })
    ]
};