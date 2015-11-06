module.exports = function(grunt) {

	grunt.config('clean', {
		dist: [
			'<%= globalConfig.css %>/**/*.css',
			// '<%= globalConfig.js_concat %>/**/*.js',
			// '<%= globalConfig.js_min %>/**/*.js', q
			// '<%= globalConfig.img_min %>/**/*', q
			// '<%= globalConfig.img_sprites %>/sprite-*-*.png' q
		]
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
};