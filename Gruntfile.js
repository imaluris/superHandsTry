module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve: {
        path: '<%= pkg.basePath %>'
    },
    watch: {
      files: [ "index.html"],
      options: {
        livereload: true,
      },
    },
    concurrent: {
      startProg: ['watch', 'serve', 'open:dev'],
			options: {
				logConcurrentOutput: true
			}
    },
    open : {
      dev : {
        path: 'http://localhost:9000/index.html'
      },
    }
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-browserify');
  
  // Default task.
  grunt.registerTask('start', ['concurrent:startProg']);
  
};