module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.initConfig({

        concat: {
            dist: {
                src: [
                    'scripts/*.js',
                    '!scripts/script.js',
                    '!scripts/script.min.js'
                ],
                dest: 'scripts/script.js'
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '// <%= grunt.template.today("dd.mm.yyyy") %> by Korbinian Polk\n',
                    sourceMap: true
                },
                src: '<%= concat.dist.dest %>',
                dest: 'scripts/script.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'styles/style.css': 'styles/style.scss',
                }
            }
        },
        autoprefixer: {
            dist: {
                src: 'styles/style.css'
            }
        },
        watch: {
            styles: {
                files: [
                    'styles/*.scss',
                    'styles/setup/*.scss',
                    'styles/global/*.scss',
                    'styles/global/elements/*.scss',
                    'styles/helpers/*.scss',
                    'styles/sections/*.scss',
                    'styles/pages/*.scss',
                    'styles/modules/*.scss',
                    'styles/lib/*.scss'
                ],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    livereload: true,
                },
            },
            scripts: {
                files: ['scripts/*.js'],
                tasks: ['concat', 'uglify']
            }
        },
        sync: {
            main: {
                files: [{
                    src: [
                        'scripts/script.js',
                        'scripts/script.min.js',
                        'styles/style.css',
                        'templates/**',
                        'fonts/**',
                        'images/**',
                        'vorlagen/**',
                        'logo.png',
                        'screenshot.png',
                        'template.php',
                        'urbana.info'
                    ],
                    dest: 'build',
                }],
                updateAndDelete: true,
                verbose: true
            }
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'korbinianpolk.de',
                    port: 21,
                    authKey: 'key1'
                },
                src: 'build',
                dest: '/urbana/sites/all/themes/urbana',
                exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'path/to/dist/tmp']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['ftp-deploy']);
};
