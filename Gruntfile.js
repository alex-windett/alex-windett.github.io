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
                    '_sass/**',
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

       concat: {
            dist: {
                files: {
                    'assets/scripts/concat/script.js': [
                        'assets/scripts/*.js',
                        'assets/scripts/functions/*.js',
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
        }

    });

    grunt.loadNpmTasks('grunt-githooks');

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concat',
        'concurrent:serve'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild',
        'concat',
        'uglify',
        'sass',
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
