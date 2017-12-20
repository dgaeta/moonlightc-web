var gulp = require('gulp');
var webpack = require('webpack-stream');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('build-moon', function() {
  return gulp.src('src/index.js')                   // Get source files with gulp.src
  .pipe(webpack( require('./webpack.config.js') ))  // Sends it through a gulp plugin
  .pipe(gulp.dest('dist/'));                        // Outputs the file in the destination folder
});

gulp.task('sass', function(){
  return gulp.src('src/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist'))
    // allow Browser Sync can inject new CSS styles (update the CSS)
    // into the browser whenever the sass task is ran
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('src/**/*.scss', ['sass']); 
  // Other watchers

  // Reloads the browser whenever HTML or JS files change
  gulp.watch('dist/*.html', browserSync.reload); 
  gulp.watch('dist/**/*.js', browserSync.reload); 
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
  })
})
