'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },

            compass: {
                files: '<%= yeoman.app %>/styles/{,*/}*.{scss,sass}',
                tasks: ['compass']
            },

            compassHome: {
                files: '<%= yeoman.app %>/elements/home/home.scss',
                tasks: ['compass:home']
            },

            compassResearch: {
                files: '<%= yeoman.app %>/elements/research/research.scss',
                tasks: ['compass:research']
            },

            compassSoftware: {
                files: '<%= yeoman.app %>/elements/software/software.scss',
                tasks: ['compass:software']
            },

            compassHighlights: {
                files: '<%= yeoman.app %>/elements/highlights/highlights.scss',
                tasks: ['compass:highlights']
            },

            compassTeam: {
                files: '<%= yeoman.app %>/elements/team/team.scss',
                tasks: ['compass:team']
            },

            compassPeople: {
                files: '<%= yeoman.app %>/elements/people/people.scss',
                tasks: ['compass:people']
            },

compassContact: {
    files: '<%= yeoman.app %>/elements/contact/contact.scss',
    tasks: ['compass:contact']
},

compassLive: {
    files: '<%= yeoman.app %>/elements/live/live.scss',
    tasks: ['compass:live']
},

compassEvent: {
    files: '<%= yeoman.app %>/elements/event/event.scss',
    tasks: ['compass:event']
},

            compassPages: {
                files: '<%= yeoman.app %>/elements/page/page.scss',
                tasks: ['compass:home',
                        'compass:research',
                        'compass:software',
                        'compass:highlights']
            },

            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    '<%= yeoman.app %>/elements/**/*.html',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: ['.tmp', '<%= yeoman.dist %>/*'],
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        compass: {
            options: {
                sassDir:'<%= yeoman.app %>/styles',
                cssDir: '.tmp/styles',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            },
            home:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/home',
                  cssDir: '.tmp/elements/home',
              }
            },
            research:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/research',
                  cssDir: '.tmp/elements/research',
              }
            },
            software:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/software',
                  cssDir: '.tmp/elements/software',
              }
            },
            highlights:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/highlights',
                  cssDir: '.tmp/elements/highlights',
              }
            },
            contact:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/contact',
                  cssDir: '.tmp/elements/contact',
              }
            },
            team:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/team',
                  cssDir: '.tmp/elements/team',
              }
            },
            people:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/people',
                  cssDir: '.tmp/elements/people',
              }
            },
            live:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/live',
                  cssDir: '.tmp/elements/live',
              }
            },
            event:{
              options: {
                  sassDir: '<%= yeoman.app %>/elements/event',
                  cssDir: '.tmp/elements/event',
              }
            }
        },

        useminPrepare: {
            src: ['<%= yeoman.app %>/index.html'],
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html','<%= yeoman.dist %>/elements/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            },
            home: {
                files: {
                    '<%= yeoman.dist %>/elements/home/home.css': '.tmp/elements/home/home.css'
                }
            },
            research: {
                files: {
                    '<%= yeoman.dist %>/elements/research/research.css': '.tmp/elements/research/research.css'
                }
            },
            highlights: {
                files: {
                    '<%= yeoman.dist %>/elements/highlights/highlights.css': '.tmp/elements/highlights/highlights.css'
                }
            },
            software: {
                files: {
                    '<%= yeoman.dist %>/elements/software/software.css': '.tmp/elements/software/software.css'
                }
            },
            team: {
                files: {
                    '<%= yeoman.dist %>/elements/team/team.css': '.tmp/elements/team/team.css'
                }
            },
            people: {
                files: {
                    '<%= yeoman.dist %>/elements/people/people.css': '.tmp/elements/people/people.css'
                }
            },
            contact: {
                files: {
                    '<%= yeoman.dist %>/elements/contact/contact.css': '.tmp/elements/contact/contact.css'
                }
            },
            live: {
                files: {
                    '<%= yeoman.dist %>/elements/live/live.css': '.tmp/elements/live/live.css'
                }
            },
            event: {
                files: {
                    '<%= yeoman.dist %>/elements/event/event.css': '.tmp/elements/event/event.css'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            },
            elements: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/elements',
                  src: '{,*/}*.html',
                    dest: '<%= yeoman.dist %>/elements/'
                }]
            },
        },
          concat: {
    options: {
      separator: ';',
    },
    dist:{},
    preload:{
      head: {
          src: ['<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
                '<%= yeoman.app %>/bower_components/platform/platform.js'],
          dest: '<%= yeoman.dist %>/scripts/preload.js',
      }
    },
    postload:{
      options: {
          src: ['<%= yeoman.app %>/bower_components/jquery/jquery.min.js',
                '<%= yeoman.app %>/sass-bootstrap/js/affix.js',
                '<%= yeoman.app %>/bower_components/OwlCarousel/owl-carousel/owl.carousel.min.js',
                '<%= yeoman.app %>/sass-bootstrap/js/collapse.js'],
          dest: '<%= yeoman.dist %>/scripts/postload.js',
      }
    }
  },
  vulcanize: {
    flatiron:{
      options: {
        csp: true,
        // need exclude because we include it several times
        excludes: {
          imports: [
            "polymer.html"
            ]
        }
      },
      files: {
        '<%= yeoman.app %>/lib-elements/flatiron-director.html': '<%= yeoman.app %>/lib-elements/flatiron-director/flatiron-director.html'
      }
    },
    jsonp:{
      options: {
        csp: true,
        // need exclude because we include it several times
        excludes: {
          imports: [
            "polymer.html"
            ]
        }
      },
      files: {
        '<%= yeoman.app %>/lib-elements/polymer-jsonp.html': '<%= yeoman.app %>/lib-elements/polymer-jsonp/polymer-jsonp.html'
      }
    },
  },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'lib-elements/**',
                        'images/{,*/}*.{webp,gif}'
                    ]
                }]
            },
                  cssAsScss: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/bower_components/OwlCarousel/owl-carousel/',
            src: '**/*.css',
            dest: '<%= yeoman.app %>/bower_components/OwlCarousel/owl-carousel',
            filter: 'isFile',
            ext: ".scss",
            extDot: "last"
          }
        ]
      },
            webcomponents: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/bower_components/',
                    dest: '<%= yeoman.app %>/lib-elements',
                    src: [
                        'polymer/**',
                        'flatiron-director/**',
                        'polymer-jsonp/**'
                    ]
                }]
            }

        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/scripts/main.js'
            }
        }
    });


    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            //
            'copy:webcomponents',
            'copy:cssAsScss',
            // vulcanize ext libs
            'vulcanize:flatiron',
            'vulcanize:jsonp',
            'compass:server',
            'compass:home',
            'compass:research',
            'compass:software',
            'compass:highlights',
            'compass:team',
            'compass:people',
            'compass:contact',
            'compass:live',
            'compass:event',
            'connect:livereload',
            // 'copy',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'compass',
        'connect:test',
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        //
        'copy:webcomponents',
        'copy:cssAsScss',
        // vulcanize ext libs
        'vulcanize:flatiron',
        'vulcanize:jsonp',
        // compile css for all pages
        'compass:dist',
        'compass:home',
        'compass:research',
        'compass:software',
        'compass:highlights',
        'compass:team',
        'compass:people',
        'compass:contact',
        'compass:live',
        'compass:event',
        // prepare files (replace <!-- build:js scripts/postload.js --> tags)
        'useminPrepare',
        // prepare images
        'imagemin',
        // compile html for all pages
        'htmlmin',
        'htmlmin:elements',
        // concat whatever needs to be
        'concat',
        'concat:preload',
        'concat:postload',
        // minify css
        'cssmin',
        'cssmin:home',
        'cssmin:research',
        'cssmin:highlights',
        'cssmin:software',
        'cssmin:team',
        'cssmin:people',
        'cssmin:contact',
        'cssmin:live',
        'cssmin:event',
        // minify JS
        'uglify',
        // move last files over
        'copy',
        // IDK yet
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
