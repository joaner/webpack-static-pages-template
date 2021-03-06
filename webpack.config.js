const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'production',

  entry: {
    home: './pages/index.html',
    about: './pages/about.html',
    contact: './pages/contact.pug',
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
              name: "[name].html",
            },
          },
          {
            loader: "extract-loader",
            options: {
              publicPath: ''
            },
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
        test: /\.pug/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html",
            },
          },
          {
            loader: "extract-loader",
            options: {
              publicPath: ''
            },
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
          {
            loader: "pug-html-loader",
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
            options: {
              publicPath: ''
            },
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
            options: {
              publicPath: ''
            },
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

  externals: [/js\/*\.js/],

  plugins: [
    new CleanWebpackPlugin(distPath)
  ],
}
