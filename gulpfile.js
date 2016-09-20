// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var nano = require('gulp-cssnano');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var image = require('gulp-image');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile and Minify Our Sass
gulp.task('sass', function() {
     var onError = function(error) {
        notify.onError({
                    title:    "GULP",
                    subtitle: "Erreur(s) détectée(s) ! Gulp n'a pas su effectuer la tâche demandée",
                    message:  "Error: <%= error.message %>",
                    icon: false,
                    sound: false
                })(error);

        this.emit('end');
    };

    return gulp.src('src/scss/*.scss')
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass({
            style: 'expanded',
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(nano())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('image', function () {
  gulp.src('src/imgs/**/**')
    .pipe(image())
    .pipe(gulp.dest('dist/imgs'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/imgs/**/**', ['image']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);