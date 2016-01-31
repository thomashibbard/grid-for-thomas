  var gulp = require('gulp')
    , sass = require('gulp-ruby-sass');


gulp.task('sass', function() {
return sass('./lib/**/*.scss', { style: 'expanded' })
  .pipe(gulp.dest('./lib/'));
});

gulp.task('watch-sass', function() {
  gulp.watch('./lib/**/*.scss', ['sass']);
})