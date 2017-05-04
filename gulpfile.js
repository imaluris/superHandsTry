var gulp = require('gulp');
var browserify = require('gulp-browserify');
var serve = require('gulp-serve');
var open = require('gulp-open');
 
// Basic usage 
gulp.task('build', function() {
    // Single entry point to browserify 
    gulp.src('./src/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('serve', serve(['public', 'build']));


gulp.task('open', function(){
  var options = {
    uri: 'localhost:3000',
    app: 'firefox'
  };
  gulp.src("public/index.html")
  .pipe(open(options));
});



gulp.task('start', ['build', 'serve', 'open']);