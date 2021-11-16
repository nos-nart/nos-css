module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-easings'),
    require('postcss-import-url'),
    require('postcss-lab-function')
  ]
}