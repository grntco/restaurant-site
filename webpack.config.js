const path = require('path');

module.exports = {
    // Do I need a mode? development or production?
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};