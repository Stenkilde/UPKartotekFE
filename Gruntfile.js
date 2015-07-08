module.exports = function(grunt) {
	grunt.initConfig({

		//jshint: {
		//	all: ['app/logic/**/*.js']
		//},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'app/styles/main.css': 'app/styles/main.scss'
				}
			}
		},

		cssmin: {
			build: {
				files: {
					'app/styles/style.min.css' : 'app/styles/style.css'
				}
			}
		},

		watch: {
			css: {
				files: ['app/styles/**/*.scss'],
				tasks: ['sass']
			}
		},

		connect: {
			server: {
				options: {
					port: 1337,
					base: 'app',
					hostname: '0.0.0.0'
				}
			}
		},

		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			tasks: ['watch', 'connect:server:keepalive']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');


	grunt.registerTask('default', ['sass', 'cssmin', 'concurrent']);
};