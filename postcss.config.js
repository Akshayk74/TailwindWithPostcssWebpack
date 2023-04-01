const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcss,
    autoprefixer,
    cssnano({
      preset: 'default'
    })
  ],
};