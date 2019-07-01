const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|build)/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'aws-sdk': {
      commonjs: 'aws-sdk',
      commonjs2: 'aws-sdk',
      amd: 'aws-sdk',
      root: 'aws-sdk',
    },
    'prop-types': {
      commonjs: 'prop-types',
      commonjs2: 'prop-types',
      amd: 'PropTypes',
      root: 'PropTypes',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'prop-types': path.resolve(__dirname, './node_modules/prop-types'),
    },
  },
};
