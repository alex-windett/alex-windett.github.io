module.exports = function(grunt) {

	grunt.initConfig({
	    sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                	'css/app.css': 'sass/app.scss',
	                	'css/reset.css': 'sass/reset.scss'
	            }
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-sass');
};