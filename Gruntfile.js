'use strict';

module.exports = function (grunt) {

    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            },
            jekyllServeDrafts: {
                command: 'jekyll serve --drafts'
            }
        },

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['_sass/**/*.{scss,sass}'],
                tasks: ['sass']
            },
            concat: {
                files: [
                    'assets/scripts/functions/*.js',
                    'assets/scripts/*.js'
                    ],
                tasks: "concat"
            },
             livereload: {
                files: [
                    '_config.yml',
                    '*.html',
                    '**/*.html',
                    '_layouts/**',
                    '_posts/**',
                    '_includes/**',
                    'assets/styles/**',
                    'scripts/**',
                ],
                options: {
                  livereload: true
                },
            }
        },

        // Project configuration.
        uglify: {
            main_script: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'assets/scripts/min/script.map.js'
                },
                files: {
                    'assets/scripts/min/script.js': 'assets/scripts/concat/script.js'
                }
            }
        },

        imagemin: {                          // Task
            img: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'assets/images/src',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'assets/images/min'                  // Destination path prefix
                }]
            }
        },

       concat: {
            dist: {
                files: {
                    'assets/scripts/concat/script.js': [
                        'assets/scripts/functions/*.js',
                        'assets/scripts/script.js'
                    ]
                }
            }
        },

        // sass (libsass) config
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: '_sass',
                cssDir: 'assets/styles'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: 'assets/styles',
                    ext: '.css'
                }]
            }
        },

        // run tasks in parallel
        concurrent: {
            serve: [
                'sass',
                'watch',
                'shell:jekyllServe'
            ],
            serveDrafts: [
                'sass',
                'watch',
                'shell:jekyllServeDrafts'
            ],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concat',
        'concurrent:serve'
    ]);

    grunt.registerTask('serve-drafts', [
        'concat',
        'concurrent:serveDrafts'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'concat',
        'uglify',
        'imagemin',
        'sass',
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
