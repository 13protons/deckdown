var gulp = require('gulp')
  , less = require('gulp-less-sourcemap')
  , path = require('path')
  , minifyCSS = require('gulp-minify-css');

gulp.task('styles', function() {
  gulp.src('./src/styles.less')
    .pipe(less({
      generateSourceMap: false, 
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(minifyCSS({noAdvanced:true, keepSpecialComments: 0}))
    .pipe(gulp.dest('./public/styles'));

  gulp.src('./src/apprend.less')
    .pipe(less({
      generateSourceMap: false, 
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/styles/theme'));
});

  
gulp.task('default', ['styles'], function(){
  gulp.watch('./src/**', ['styles']);
});

