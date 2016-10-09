const Webpack = require('webpack')
const cssnano = require('cssnano')
const { uniq, concat } = require('lodash')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = (process.env.NODE_ENV === 'production')

const pluginsList = [
  new ExtractTextPlugin('css/style.css'),
  new Webpack.NoErrorsPlugin()
]

const prodPlugins = [
  new Webpack.optimize.DedupePlugin(),
  new Webpack.optimize.OccurrenceOrderPlugin(true),
  new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  })
]

module.exports = {
  noInfo: true,
  target: 'web',
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: './',
    filename: 'js/main.js'
  },
  devtool: isProduction ? null : 'cheap-module-sourcemap',
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1!postcss'
        )
      }
    ]
  },
  postcss: () => [cssnano, autoprefixer],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: uniq(isProduction ? concat(prodPlugins, pluginsList) : pluginsList)
}
