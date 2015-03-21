var browserSync     = require('browser-sync');
var reload          = browserSync.reload;
var gulp            = require('gulp');
var uglify          = require('gulp-uglify');
var gulp            = require('gulp');
var gutil           = require('gulp-util');

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// minify JS
gulp.task('minify-js', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./_build/'));
});


// BUGFIX: warning: possible EventEmitter memory leak detected. 11 listeners added.
require('events').EventEmitter.prototype._maxListeners = 100;


// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});


// Default task to be run with `gulp`
// This default task will run BrowserSync & then use Gulp to watch files.
// When a file is changed, an event is emitted to BrowserSync with the filepath.
gulp.task('default', ['browser-sync'], function () {
    gulp.watch('css/*.css', function (file) {
        if (file.type === "changed") {
            reload(file.path);
        }
    });
    gulp.watch('*.html', ['bs-reload']);
    gulp.watch('*.js', ['bs-reload']);
    gulp.watch('./**/*.js', ['bs-reload']);
});