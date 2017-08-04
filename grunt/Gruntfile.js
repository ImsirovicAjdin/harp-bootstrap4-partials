'use strict';
//Load Grunt
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Tasks
        sass: { // Begin Sass Plugin
            dist: {
                options: {
                    sourcemap: 'inline'
                },
                files: [{
                    expand: true,
                    cwd: '../',
                    src: ['main.scss'],
                    dest: '../app/css',
                    ext: '.css'
                }]
            }
        }
    });
    //Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register Grunt tasks
    grunt.registerTask('default', ['sass']);
};