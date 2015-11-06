module.exports = function(grunt) {

	grunt.config('watch', {
		sass: {
			files: [ '*.scss' ],
		},
		js: {
			files: 'scripts/**/*.js',
		},
		livereload: {
			options: {
				livereload: 35740
			},
			// files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
			files: ['**/*.html','**/*.html','**/*.markdown', '**/*.php', 'css/*','img/**/*.{png,jpg,jpeg,gif,webp,svg}']
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};