var gulp = require('gulp'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    gcmq = require('gulp-group-css-media-queries');





//LESS
gulp.task('css', function () {

    return gulp.src('./work_1/css/less/style.less')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(less({
            compress: false
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', "IE 9"],
        }))
        .pipe( gulp.dest('./css') )
        .pipe( browserSync.stream());
});

// SASS
gulp.task('css', function () {

    return gulp.src('./css/sass/main.sass')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass({
            compress: false
        }))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', "IE 9"],
        }))
        .pipe( gulp.dest('./css') )
        .pipe( browserSync.stream());
});

gulp.task('server', function() {

    // Not remove! This is config by denis
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });



});

gulp.task('gcmq', function () {
    gulp.src('./css/***.css')
        .pipe(gcmq())
        .pipe(gulp.dest('css'));
});






gulp.task('watch', function() {
    gulp.watch('./css/less/***.less', ['css']);
    gulp.watch(['./**/*.html', './portfolio/js/common.js', './portfolio/php/send.php'], browserSync.reload);
});

gulp.task('default', ['css', 'server', 'watch']);