var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('reload-css', function () {
    gulp.src('./css/*.css');
});

gulp.task('reload-html', function () {
    gulp.src('./*.html')
});

gulp.task('default', function() {
    livereload.listen();
    gulp.watch('./css/*.css', ['reload-css']);
    gulp.watch('./*.html', ['reload-html']);
});
