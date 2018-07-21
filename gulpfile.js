/**
 * finmkb gulpfile
 */

 let gulp = require('gulp');
 let sass = require('gulp-sass');
 let postcss = require('gulp-postcss');
 let autoprefixer = require('autoprefixer');
 let clean_css = require('gulp-clean-css');
 let imagemin = require('gulp-imagemin');
 let browsersync = require('browser-sync').create();

 gulp.task('sass', function ()
{
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(clean_css())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('public/css'));
});

gulp.task('images', function ()
{
    return gulp.src('src/img/**/*.{svg,jpeg,jpg,png,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'));
});

gulp.task('html', function ()
{
    return gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('compile', ['sass', 'images', 'html']);

gulp.task('serve', ['compile'], function ()
{
    browsersync.init({
        server: "./public"
    });

    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/img/**/*.{svg,jpeg,jpg,png,gif}', ['images']);
    gulp.watch('src/html/**/*.html', ['html']);

    gulp.watch('src/html/**/*.html').on('change', browsersync.reload);
});

gulp.task('default', ['compile']);