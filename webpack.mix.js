let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.setPublicPath('assets');
mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'assets/js/')
	.copy('node_modules/jquery/dist/jquery.min.js', 'assets/js')
	.copy('node_modules/slick-carousel/slick/', 'assets/plugins/slick');
mix.js('resources/assets/js/app.js', 'assets/js')
   .sass('resources/assets/sass/style.scss', 'assets/css/style.css');
