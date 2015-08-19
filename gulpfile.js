var gulp = require('gulp')
  , rename = require("gulp-rename")
  , inline = require('gulp-inline')
  , uglify = require('gulp-uglify')
  , minifyCSS = require('gulp-minify-css')
  , minifyHTML = require('gulp-minify-html');

gulp.task('default', function(){
  gulp.src('index.dev.htm')
  .pipe(minifyHTML())
  .pipe(inline({
    js: uglify(),
    css: minifyCSS(),
    disabledTypes: ['svg', 'img']
  }))
  .pipe(rename('index.htm'))
  .pipe(gulp.dest(''));
});
