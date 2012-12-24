module.exports = function(grunt) {
    grunt.initConfig({
        jade: {
            amd: {
                src: 'views/*.jade',
                dest: 'static/views/',
                wrapper: {
                    amd: true,
                    dependencies: 'jade'
                }
            }
        },
        watch: {
            jade: {
                files: [
                    'views/*.jade'
                ],
                tasks: ['jade:amd']
            }
        }
    });

    grunt.loadNpmTasks('grunt-jade');
    grunt.loadNpmTasks('grunt-reload');

    grunt.registerTask('default', 'watch');
};


