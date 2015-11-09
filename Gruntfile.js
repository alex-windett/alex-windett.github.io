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
            }
        },

        // watch for files to change and run tasks when they do
        watch: {
            sass: {
                files: ['_sass/**/*.{scss,sass}'],
                tasks: ['sass']
            },
             livereload: {
                files: [
                    '_config.yml',
                    '*.html',
                    '**/*.html',
                    '_layouts/**',
                    '_posts/**',
                    '_includes/**',
                    '_sass/**',
                ],
                options: {
                  livereload: true
                },
            }
        },

        // Project configuration.
        uglify: {
            my_target: {
                files: {
                    'assets/scripts/script.min.js': 'assets/scripts/script.js'
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
                cssDir: '_site/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_site/css',
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
            options: {
                logConcurrentOutput: true
            }
        },

        githooks: {
            all: {
              // Will run the jshint and test:unit tasks at every commit
              'pre-push': 'grunt'
            }
        }

    });

    grunt.loadNpmTasks('grunt-githooks');

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'sass',
        'uglify'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};