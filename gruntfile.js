module.exports = function (grunt) {

    grunt.initConfig({
        cssmin: {
            options: {
                sourceMap: true
            },
            test: {
                files: [
                    {
                        src: "test.css",
                        dest: "test.min.css"
                    }
                ]
            },
            realExample: {
                files: [
                    {
                        src: "real-example.css",
                        dest: "bundle/real-example.min.css"
                    }
                ]
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            test: {
                files: [
                    {
                        src: "test.scss",
                        dest: "test.css"
                    }
                ]
            },
            realExample: {
                files: [
                    {
                        src: "real-example.scss",
                        dest: "real-example.css"
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass:test', 'cssmin:test']);
    grunt.registerTask('real', ['sass:realExample', 'cssmin:realExample']);

};