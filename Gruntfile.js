module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            css: {
                files: ['build/scss/*.scss'],
                tasks: ['sass'],
            },
            scripts: {
                files: ['public/scripts/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
            livereload: {
                files: ['public/**/*'],
                options: {
                    livereload: true
                },
            },
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'build/scss',
                    src: ['*.scss'],
                    dest: 'public/styles',
                    ext: '.css',
                }],
            },
        },
        jshint: {
            all: {
                src: ['public/scripts/*.js'],
            },
        },
    });

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-jshint');
}