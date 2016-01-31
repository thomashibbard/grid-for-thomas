var gulp = require('gulp')
  , sass = require('gulp-ruby-sass')
  , cssmin = require('gulp-cssmin')
  , rename = require('gulp-rename');

gulp.task('sass', function() {
return sass('./css/**/*.scss', { style: 'expanded' })
  .pipe(gulp.dest('./css/'));
});

gulp.task('watch-sass', function() {
  gulp.watch('./css/**/*.scss', ['sass']);
})

gulp.task('minify-css', function () {
	gulp.src('lib/**/*.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('css'));
});