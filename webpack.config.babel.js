import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

const EXTRACT_CSS = new ExtractTextPlugin('[name].bundle.css');


const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.less$/i,
                loader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { limit: 10000 } // Convert images < 10k to base64 strings
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
    ]
}

module.exports = config