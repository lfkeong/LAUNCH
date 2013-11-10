module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		handlebars: {
			compile: {
        options: {
          namespace: "NewzSocial.Template",
          processName: function(filename) {
            return filename.substring(filename.lastIndexOf("/")+1,filename.lastIndexOf("."));
          },
          compilerOptions: {
            knownHelpers: {
              "each": true,
              "if": true
            }
          }
        },
        files: {
          "public/beta-Bobby/js/templates.compiled.js": "templates/*.handlebars"
        }
      }
    }
  }); 
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.registerTask('default', ['handlebars']);
}
