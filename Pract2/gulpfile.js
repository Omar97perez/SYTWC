var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
});
gulp.watch('*.html').on("change", browserSync.reload);

gulp.task('styles', function(){
  gulp.src(['./src/styles/*.css'])
  .pipe(sourcemaps.init())
  .pipe(minifyCss())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/styles'))
  .pipe(browserSync.stream());
  });

gulp.task('image', function(){
gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'))
});