var gulp = require('gulp')
  , sass = require('gulp-ruby-sass')
  , cssmin = require('gulp-cssmin')
  , rename = require('gulp-rename');

gulp.task('sass', function() {
return sass('./lib/**/*.scss', { style: 'expanded' })
  .pipe(gulp.dest('./lib/'));
});

gulp.task('watch-sass', function() {
  gulp.watch('./lib/**/*.scss', ['sass']);
})

gulp.task('minify-css', function () {
	gulp.src('lib/**/*.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('css'));
});