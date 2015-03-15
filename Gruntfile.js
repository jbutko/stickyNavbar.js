module.exports = function(grunt) {

  // Load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      // options: {
      //   livereload: true,
      // },
      sass: {
        files: ['/*.css'],
        tasks: ['sass:dev'],
        sourceComments: 'normal'
      },
      uglifyConcat: {
        files: ['/*.js'],
        tasks: ['uglify', 'concat']
      },
      // concat: {
      //   files: ['js/*.js'],
      //   tasks: ['concat']
      // },
      // imagemin: {
      //   files: ['library/images/**/*.jpg', 'library/images/**/*.png'],
      //   tasks: ['imagemin']
      // },
      // Live reload files
      livereload: {
        options: {
          livereload: true,
          debounceDelay: 6000
        },
        files: [
          '**/*.css',
          '**/*.scss',
          '**/*.html',
          '**/*.js'
        ]
      }
    },
    // sass: {
    //   dev: {
    //     options: {
    //       style: 'expanded',
    //       debugInfo: true,
    //       sourcemap: true,
    //       trace: true
    //     },
    //     files: {
    //       'library/css/style.css': 'library/scss/style.scss'
    //     }
    //   },
    //   prod: {
    //     options: {
    //       style: 'compressed'
    //     },
    //     files: {
    //      'library/css/style.css': 'library/scss/style.sass'
    //     }
    //   }
    // },
    // validation: {
    //         options: {
    //                 reset: grunt.option('reset') || false,
    //                 stoponerror: false,
    //                 remotePath: "http://design.doddiblog.com/portfolio",
    //                 // remoteFiles: ["html/moving-from-wordpress-to-octopress/",
    //                                            // "css/site-preloading-methods/"], //or
    //                 // remoteFiles: "validation-files.json", // JSON file contains array of page paths.
    //                 relaxerror: ["Bad value X-UA-Compatible for attribute http-equiv on element meta."] //ignores these errors
    //         },
    //         files: {
    //                 //src: ['*.html',
    //                         //'index.php']
    //         }
    // },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/plugins.min.js': 'js/plugins.js',
          'js/scripts.min.js': 'js/scripts.js'
          //'library/js/2min/jquery.easing.min.js': 'library/js/2min/jquery.easing.js',
          //'library/js/2min/jquery.finalTilesGallery.min.js': 'library/js/2min/jquery.finalTilesGallery.js'
        }
      }
    },
    jshint: {
        files: ['js/scripts.js', 'Gruntfile.js'],
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        }
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'js/libs/*.js'
        ],
        dest: 'js/plugins.js'
      },
    },
    imagemin: {
      dist: {
        options: {
            optimizationLevel: 8,
            progressive: true
        },
        files: [{
            expand: true,
            cwd: 'img/',
            src: '**/*.{png,jpg,gif}',
            dest: 'img/compressed/'
        }]
      },
      normal: {
        options: {
            optimizationLevel: 10,
            progressive: true
        },
        files: [{
            expand: true,
            // cwd: '**/*/',
            src: 'img/*.{png,jpg,gif}',
            dest: 'img/min'
        }]
      }
    },
    //grunt-sass: "lightning fast sass compilation"
    sass: {
        dev: {
            options: {
                // includePaths: ['imports/are/here/'],
                outputStyle: 'compact',
                sourceComments: 'map',
                sourceMap: 'main.css.map'
            },
            files: {
                'jquery.stickyNavbar.css': 'jquery.stickyNavbar.css'
            }
        }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/2min',
        src: ['*.css', '!*.min.css'],
        dest: 'css/min',
        ext: '.min.css'
      }
    }

  });

  // Using the 'grunt development' commando will autoprefix, compile sass, concatenate and activate the watch task
  grunt.registerTask('dev', ['sass:dev', 'watch']);
  // The production task will compile sass and compress the outputted CSS, concatenate JS, compress it and watch files
  grunt.registerTask('prod', ['sass:dev', 'concat', 'uglify', 'watch']);
  // The production task will compile sass and compress the outputted CSS, jshint all js, concatenate JS, compress it, and compress images
  grunt.registerTask('prod-all', ['sass:prod', 'jshint', 'imagemin', 'concat', 'uglify']);
};