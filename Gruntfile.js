module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            css: {
                files: ['www/styles/scss/*.scss'],
                tasks: ['sass'],
            },
            scripts: {
                files: ['www/scripts/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
            livereload: {
                files: ['www/**/*'],
                options: {
                    livereload: true
                },
            },
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'www/styles/scss',
                    src: ['*.scss'],
                    dest: 'www/styles/css',
                    ext: '.css',
                }],
            },
        },
        jshint: {
            all: {
                src: ['www/scripts/*.js'],
            },
        },
    });

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-jshint');
}