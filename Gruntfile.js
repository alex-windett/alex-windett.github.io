module.exports = function (grunt) {

	var timestamp = new Date().getTime();

	var globalConfig = {
		project: 'windett',
		assets : 'assets',

		base: '/',

		js           : '<%= globalConfig.assets %>/scripts',
		css          : '/css',
		scss         : '/scss',
		scss_includes: '<%= globalConfig.scss %>/includes',
		img          : '<%= globalConfig.assets %>/img',

		js_min   : '<%= globalConfig.js %>/min',
		js_concat: '<%= globalConfig.js %>/concat',

		timestamp: timestamp
	};

	grunt.initConfig({
		pkg         : grunt.file.readJSON('package.json'),
		globalConfig: globalConfig
	});

	// Load tasks
	grunt.loadTasks('grunt-tasks');

	// Register tasks
	grunt.registerTask('common', [
		//'scss_images',
		//'newer:sprite',
		//'sass_globbing',
		// 'rename',
		// 'replace:scss',
		// 'concat',
		// 'uglify',
		'sass'
	]);
	grunt.registerTask('default', [
		'common',
		// 'svgmin',
		// 'newer:imagemin',
		// 'replace:images'
	]);
	grunt.registerTask('dev', [
		'common',
		'watch'
	]);
};