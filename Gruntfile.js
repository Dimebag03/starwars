module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    cssmin: {
      'css/style.min.css': ['css/font-awesome.min.css', 'css/style.css']
    },

    uglify: {
      my_target: {
        files: {
          'js/script.min.js': ['js/script.js', 'js/tablatura.js']
        }
      }
    },

    watch: {
      scriptSass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      },
      scriptCssMin: {
        files: ['!css/*.min.css', 'css/*.css'],
        tasks: ['cssmin']
      },
      scriptUglify: {
        files: ['!js/*.min.js', 'js/*.js'],
        tasks: ['uglify']
      }
    }
    
  });

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-sass');
  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);

  // Watch event hendler.
  grunt.event.on("watch", function () {
    grunt.log.writeln("Testando eventos do grunt"["green"].bold);
  });

};