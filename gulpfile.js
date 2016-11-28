'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');

var nm = './node_modules/';

gulp.task('js', function() {
  gulp.src('builds/dev/assets/js/*.js')
    .pipe(gulp.dest('builds/dist/assets/js/'))
});

gulp.task('pug', function(){
  gulp.src('builds/dev/*.pug')
    .pipe(pug({
        pretty: '    '
    }))
    .pipe(gulp.dest('builds/dist/'))
});

gulp.task('sass', function () {
  gulp.src('builds/dev/assets/sass-page/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
            browsers: ['last 10 versions','> 5%'],
            cascade: false
        }))
      .pipe(gulp.dest('builds/dist/assets/css/'));
});

gulp.task('img', function() {
  gulp.src('builds/dev/assets/img/**/*')
    .pipe(gulp.dest('builds/dist/assets/img/'));
});


gulp.task('watch', function() {
  gulp.watch('builds/dev/assets/js/**/*.js', ['js']);
  gulp.watch('builds/dev/assets/**/*.scss', ['sass']);
  gulp.watch('builds/dev/**/*.html', ['html']);
  gulp.watch('builds/dev/assets/img/**/*', ['img']);
  gulp.watch('builds/dev/assets/fonts/**/*', ['fonts']);
  gulp.watch('builds/dev/**/*.pug', ['pug']);
  gulp.watch('builds/dev/assets/libs/**/*', ['libs']);
});

gulp.task('libs', function() {
  gulp.src(nm+'jquery/dist/jquery.min.js')
      .pipe(gulp.dest('./builds/dist/assets/libs/jquery/'));

  // gulp.src(nm+'/normalize.css/normalize.css')
  //     .pipe(gulp.dest('./builds/dist/assets/css/'));

  gulp.src('builds/dev/assets/libs/**/*.*')
      .pipe(gulp.dest('./builds/dist/assets/libs/'));

});

gulp.task('fonts', function() {
  gulp.src('builds/dev/assets/fonts/**/*')
      .pipe(gulp.dest('./builds/dist/assets/fonts/'));
});

gulp.task('webserver', function() {
  gulp.src('builds/dist/')
      .pipe(webserver({
        livereload: true,
        open: false,
        port: 8080
      }));
});

gulp.task('default', [
  'libs',
  'fonts',
  'img',
  'js',
  'pug',
  'sass',
  'webserver',
  'watch'
]);
