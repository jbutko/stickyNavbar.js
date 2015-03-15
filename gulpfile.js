/**
 * @author  Jozef Butko
 * @date    Feb/2014
 * @status  Work in progress
 *
 * The following build process consists of these steps:
 * 1. clean _build folder
 * 2. compile SASS files, minify and uncss compiled css
 * 3. copy and minimize images
 * 4. build index.html and change base tag into _build folder
 * 5. copy fonts
 * 6. copy components folder - directives, services etc., only html
 * 7. TODO: transform views into templateCache
 * 
 */
var browserSync     = require('browser-sync');
var reload          = browserSync.reload;
var gulp            = require('gulp');
// var sass            = require('gulp-sass');
// var filter          = require('gulp-filter');
var uglify          = require('gulp-uglify');
// var minifyCSS       = require('gulp-minify-css');
// var minifyHTML      = require('gulp-minify-html');
// var del             = require('del'); // delete files
// var concat          = require('gulp-concat');
var gulp            = require('gulp');
// var imagemin        = require('gulp-imagemin');
// var sass            = require('gulp-sass');
// var sourcemaps      = require('gulp-sourcemaps');
// var autoprefixer    = require('gulp-autoprefixer');
// var rename          = require('gulp-rename');
// var notify          = require('gulp-notify');
// var changed         = require('gulp-changed');
// var usemin          = require('gulp-usemin');
// var rev             = require('gulp-rev');// append revision numbers at the end of filename: https://github.com/sindresorhus/gulp-rev
// var size            = require('gulp-size');
var gutil           = require('gulp-util');

// process.setMaxListeners(0);

// optimize images
// gulp.task('images', function () {
//     return gulp.src('./images/*')
//         // .pipe(imagemin({
//         //     progressive: true,
//         //     svgoPlugins: [{removeViewBox: false}],
//         //     use: [pngquant()]
//         // }))
//         .pipe(changed('./_build/images'))
//         .pipe(imagemin({
//           optimizationLevel: 3,
//           progressive: true,
//           interlaced: true
//         }))
//         .pipe(gulp.dest('./_build/images'));
// });

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

// minify CSS
// gulp.task('minify-css', function() {
//   gulp.src(['./css/**/*.css', '!./css/**/*.min.css'])
//     .pipe(rename({suffix: '.min'}))
//     .pipe(minifyCSS({keepBreaks:true}))
//     .pipe(gulp.dest('./css/'))
//     .pipe(gulp.dest('./_build/css/'));
// });

// minify HTML
// gulp.task('minify-html', function() {
//     var opts = {
//       comments: true,
//       spare:true,
//       conditionals: true
//     };

//   gulp.src('./*.html')
//     .pipe(minifyHTML(opts))
//     .pipe(gulp.dest('./_build/'));
// });

// Copy fonts from a module outside of our project (like Bower)
// gulp.task('fonts', function() {
//     gulp.src('./fonts/*.{ttf,woff,woff2,otf,eof,eot,svg}')
//     .pipe(changed('./_build/fonts'))
//     .pipe(gulp.dest('./_build/fonts'));
// });

// // copy components html
// gulp.task('components', function() {
//     gulp.src('./components/**/*.html')
//     .pipe(gulp.dest('./_build/components'));
// });

// // copy views html
// gulp.task('views', function() {
//     gulp.src('./views/**/*.html')
//     .pipe(gulp.dest('./_build/views'));
// });

// // delete build folder
// gulp.task('clean:build', function (cb) {
//   del([
//     // here we use a globbing pattern to match everything inside the `build` folder
//     './_build/*.*',
//     './_build/css/**/*.*',
//     './_build/js/**/*.*',
//     // we don't want to clean this file though so we negate the pattern
//     //'!dist/mobile/deploy.json'
//   ], cb);
// });

// // concat files
// gulp.task('concat', function() {
//   gulp.src('./js/*.js')
//     .pipe(concat('scripts.js'))
//     .pipe(gulp.dest('./_build/'));
// });

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
// gulp.task('sass', function () {
//     return gulp.src('styles/**/*.scss')
//         .pipe(plumber())
//         .pipe(sourcemaps.init())
//         .on('error', gutil.log)
//         .pipe(sass({ style: 'expanded' }))
//         .on('error', gutil.log)
//         .on('error', notify.onError({
//           title: 'SASS Failed',
//           message: 'Error(s) occurred during compile!'
//         }))
//         .pipe(autoprefixer('last 3 version'))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('css'))
//         .pipe(reload({stream: true}))
//         .pipe(notify({ message: 'Styles task complete' }));
// });

// gulp.task('sass:build', function() {
//   var s = size();

//   return gulp.src('styles/**/*.scss')
//     .pipe(plumber())
//     .pipe(sass({
//       style: 'compact'
//     }))
//     .on('error', gutil.log)
//     .pipe(autoprefixer('last 3 version'))
//     // .pipe(uncss({
//     //   html: ['./index.html', './views/**/*.html', './components/**/*.html'],
//     //   ignore: [
//     //     '.index',
//     //     '.slick',
//     //     // '.owl-prev',
//     //     // 'owl-prev',
//     //     // '.owl-next',
//     //     // 'owl-next',
//     //     /\.owl+/,
//     //     /\.owl-next/,
//     //     /\.owl-prev/
//     //   ]
//     // }))
//     .pipe(minifyCSS({
//       keepBreaks: true,
//       aggressiveMerging: false,
//       advanced: false
//     }))
//     .pipe(gulp.dest('css'))
//     .pipe(s)
//     .pipe(notify({
//       onLast: true,
//       message: function() {
//         return 'Total CSS size ' + s.prettySize;
//       }
//     }));
// });


// BUGFIX: warning: possible EventEmitter memory leak detected. 11 listeners added.
require('events').EventEmitter.prototype._maxListeners = 100;

// index.html build
// script/css concatenation
// gulp.task('usemin', function () {
//   return gulp.src('./index.html')
//       // base path replace
//       .pipe(htmlreplace({
//           'base': '<base href="/ffo/">'
//       }))
//       .pipe(usemin({
//         css: [ minifyCSS(), 'concat' ],
//         //html: [minifyHTML({empty: true})],
//         js: [ uglify(), rev() ]
//       }))
//       // .pipe(usemin({
//       //   css: [ minifyCSS(), 'concat' ],
//       //   libs: [ uglify() ],
//       //   angularlibs: [ uglify() ],
//       //   appcomponents: [ uglify() ],
//       //   mainapp: [ uglify() ]
//       // }))
//       .pipe(gulp.dest('./_build/'));
// });

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

/**
 * Build Task:
 * 1. clean _build folder
 * 2. compile SASS files, minify and uncss compiled css
 * 3. copy and minimize images
 * 4. build index.html and change base tag into _build folder
 * 5. copy fonts
 * 6. copy components folder - directives, services etc., only html
 * 7. copy views TODO: templateCache
 */
// gulp.task('build', ['clean:build', 'sass:build', 'images', 'usemin', 'fonts', 'components', 'views'],
//   function() {
//     var s = size();

//     return gulp.src('./_build/**/*.*')
//       .pipe(s)
//       .pipe(notify({
//         onLast: true,
//         message: function() {
//           return 'Total size ' + s.prettySize;
//         }
//       }));
//   });

