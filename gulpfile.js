var gulp = require('gulp')
  , sass = require('gulp-ruby-sass')
  , cssmin = require('gulp-cssmin')
  , rename = require('gulp-rename');

gulp.task('sass', function(callback) {
  return sass('./css/**/*.scss', { style: 'expanded' })
    .pipe(gulp.dest('./css/'));
});

gulp.task('minify-css', function () {
  return gulp.src('css/grid.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'));
});

gulp.task('watch-sass', function() {
  gulp.watch('./css/*.scss', ['sass']); 
  gulp.watch('./css/grid.css', ['minify-css']);
});