const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('app/scss/*.scss')
    .pipe(sass())
    .pipe(dest('dist'));
}

function watchTask() {
  watch(['app/scss/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);