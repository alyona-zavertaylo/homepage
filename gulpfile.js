var gulp = require('gulp');
var sass = require('gulp-sass');
//и что-то выведем в консоль для подтверждения
gulp.task('sass', function () {
    gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./scss/style.scss', ['sass']);
});