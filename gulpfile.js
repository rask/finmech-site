/**
 * finmkb gulpfile
 */

 let gulp = require('gulp');
 let sass = require('gulp-sass');
 let clean_css = require('gulp-clean-css');
 let imagemin = require('gulp-imagemin');

 gulp.task('sass', function ()
{
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(clean_css())
        .pipe(gulp.dest('public/css'));
});

gulp.task('images', function ()
{
    return gulp.src('src/img/**/*.{jpeg,jpg,png,gif}')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'));
});

gulp.task('html', function ()
{
    return gulp.src('src/html/**/*.html')
        .pipe(gulp.dest('public'));
});

gulp.task('compile', ['sass', 'images', 'html']);

gulp.task('default', ['compile']);