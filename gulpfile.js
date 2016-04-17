var gulp = require('gulp'),
	concatCss = require('gulp-concat-css');

gulp.task('test', function () {
  return gulp.src('./public/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('./build/'));
});