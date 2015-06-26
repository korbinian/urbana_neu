module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-sync');
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
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'styles',
					src: ['*.css', '!*.min.css'],
					dest: 'styles',
					ext: '.min.css'
				}]
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
			}
		}
	});

	grunt.registerTask('default', ['watch']);
};