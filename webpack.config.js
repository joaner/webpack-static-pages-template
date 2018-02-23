const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    home: './pages/index.html',
    about: './pages/about.html',
  },

  output: {
    path: distPath,
    filename: '[name].js'
  },

  devServer: {
    contentBase: distPath
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src", "link:href", "script:src"],
              interpolate: true,
              minimize: true,
              removeComments: false,
              collapseWhitespace: false
            },
          },
        ],
      },
      {
        test: /\.less$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[hash:6].css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: {
              minimize: true,
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[hash:6].css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: {
              minimize: true,
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[hash:6].js",
            },
          },
        ],
      },
      {
        test: /\.(jpg|svg|png)$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "imgs/[name].[hash:6].[ext]",
            },
          },
        ],
      },
    ]
  },

  externals: /js\/*\.js/,

  plugins: [
    // minify javascript
    new webpack.optimize.UglifyJsPlugin(),

    new CleanWebpackPlugin(distPath)
  ],
}
