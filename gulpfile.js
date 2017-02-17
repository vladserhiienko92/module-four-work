var gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat');


var paths = {
	sass: path.resolve('src/sass'),
	css: path.resolve('src/css'),
    js: path.resolve('src/js')
};


gulp.task('sass', function() {
    return gulp.src( [paths.sass+'/main.scss'] )
       .pipe( sass() )
       .pipe(minifycss())
       .pipe( rename('style.min.css') )
       .pipe( gulp.dest(paths.css) );
});

gulp.task('js', function() {
    return gulp.src( [paths.js+'/partials/main.js'] )
       .pipe(uglify())
       .pipe( rename('scripts.min.js') )
       .pipe(gulp.dest(paths.js));
});

gulp.task('watch', function () {
    // Watch .css files
    gulp.watch(paths.sass+'/**/*.scss', ['sass']);
     gulp.watch(paths.sass+'/partials/**/*.scss', ['sass']);
    // Watch .js files
    gulp.watch(paths.js+'/partials/**/*.js', ['js']);
});

gulp.task('default', function () {
    gulp.start('js', 'sass', 'watch');
});