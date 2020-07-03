const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { LicenseWebpackPlugin } =  require('license-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**@type{import('webpack').Configuration}*/
const config = {
    entry: path.resolve(__dirname, './src/index'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
    },
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
        }),
        new LicenseWebpackPlugin({
            addBanner: true
        }),
    ],

    mode: process.env.mode || 'development',

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css/,
                use: [
                    'style-loader', 
                    {   
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },

    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src')
        }
    }
}

module.exports = config