var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    stylus = require('gulp-stylus'),
    watch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename');
    

// gulp.task('css', function () {
//   return gulp.src('./public/css/*.css')
//     .pipe(concatCss("bundle.css"))
//     .pipe(cssmin())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./build/'));
// });


 
// gulp.task('compress', function() {
//   return gulp.src('./images/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('./build/'));
// });

gulp.task('default', function () {
    return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));    
    return gulp.src('./public/css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/'));
     

});