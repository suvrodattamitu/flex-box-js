let mix = require('laravel-mix');

mix.setPublicPath('public');
mix.setResourceRoot('../');

mix.sass('scss/app.scss', 'css/app.css');

mix.browserSync('127.0.0.1/flexbox-scss/app.html');

// mix.browserSync({
//     proxy: '127.0.0.1/flexbox-scss/app.html'
// });
