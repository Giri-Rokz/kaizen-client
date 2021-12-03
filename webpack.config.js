/*import {Configuration} from 'webpack';
import {resolve} from 'path';

const config: Configuration = {
    entry: './src/app.ts',
    mode: 'development',
    //devtool: 'inline-source-map',
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions : ['.tsx','.ts','.js']
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname,'dist')
    }
}

export default config;*/

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/app.ts',
    mode: 'production',    
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                use: 'ts-loader'
            },{
                test:/\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"]
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: "asset/resource"
            }
        ]
    },
    resolve: {
        extensions : ['.tsx','.ts','.js']
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],  
    output: {        
        path: path.resolve(__dirname,'dist'),
        assetModuleFilename: "images/[hash][ext][query]",
        clean: true
    },
    devtool: 'source-map',
    watch: true
}
