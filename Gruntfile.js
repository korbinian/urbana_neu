module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
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
                    style: 'expanded'
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
                    'styles/1_setup/*.scss',
                    'styles/2_global/*.scss',
                    'styles/2_global/elements/*.scss',
                    'styles/3_helpers/*.scss',
                    'styles/4_layout/*.scss',
                    'styles/4_layout/sections/*.scss',
                    'styles/4_layout/pages/*.scss',
                    'styles/5_modules/*.scss',
                    'styles/6_lib/*.scss',
                    'styles/7_theme/*.scss'
                ],
                tasks: ['sass', 'autoprefixer', 'cssmin'],
                options: {
                    livereload: true,
                },
            },
            scripts: {
                files: ['scripts/*.js'],
                tasks: ['concat', 'uglify']
            },
            sync: {
            	files: ['**'],
            	tasks: ['sync']
            }
        },
        sync: {
            main: {
                files: [{
                    src: [
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
