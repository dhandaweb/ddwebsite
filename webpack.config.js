const path = require('path');

module.exports = {
  entry: './app/App.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8080
  },
  resolve: {
    root: [
      path.resolve('./app'),
      path.resolve('./app/stylesheet')
    ]
  },
  module: {
    loaders: [
      {
        text: /(\.js)$/,
				exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /(\.scss)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      }
    ]
  }
};

