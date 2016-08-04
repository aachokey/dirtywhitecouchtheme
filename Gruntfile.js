module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
         banner: 'Dirty White Couch Recording Studio Theme by Aric Chokey and Elizabeth Peck | MIT Licensed'
      },
      target: {
        files: {
           'assets/css/style.min.css': ['assets/css/output.css']
        }
      }
    },
    uglify: {
      options: {
        preserveComments: 'all'
      },
      my_target: {
        files: {
          'assets/js/main.min.js': ['assets/js/index.js']
        }
      }
    }
  });

  // Load the plugin that provides the tasks.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [
    'cssmin', 'uglify']);

};