module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		replace: {
		  index: {
		    src:  'index.html',             
		    dest: 'build/index.html',
		    replacements: [{
		      from: '.css',                   
		      to: '.min.css'
		    },
		    {
		      from: '.js',                   
		      to: '.min.js',                   

		    }
		    ]
		  },
		  livereload:{
		  	src:  'build/index.html',             
		    overwrite:true,
		    replacements: [{
		    	from: 'livereload.min.js',                   
		    	to: 'livereload.js'
		    }]
		  }

		},
		uglify: {
		      build: {
		        files: [{
		            expand: true,
		            cwd:'app',
		            src: 'scripts/**/*.js',
	        		dest: 'build/app/',
	        		ext:'.min.js'
		        }]
		      }
		    }
		,
	    watch: {
		    tasks: ['build'],
		    options: {
		      livereload: 35729,
		    },
		    karma:{
		    	files: ['test/specs/**/*Spec.js'],
		    	tasks: ['karma']
		    },
		    sass:{
		    	files: ['app/styles/scss/*.scss'],
		    	tasks: ['newer:sass','newer:cssmin']
		    },
		    css: {
		        files: ['app/styles/css/*.css'],
		        tasks: ['newer:cssmin']
		    },
		    scripts: {
		        files: ['app/scripts/**/*.js'],
		        tasks: ['newer:uglify']
		    },
		    index: {
		        files: ['index.html'],
		        tasks: ['replace']
		    }
		  },
		karma: {// to run karma test
	      unit: {
	        configFile: 'karma.conf.js',
	        singleRun: true
	      }
	    },
			cssmin: {// to minify css fiels
			   dist: {
			      options: {
			         banner: '/*! Test application custom css  */'
			      },
			      files: [{
			      	expand:true,
			      	cwd:"app/",
			      	src:['styles/css/*.css'],
			      	dest:'build/app/',
			      	ext:'.min.css'
			         
			      }]
			  }
			},
		 	copy: {
			  	bower: {
			    	cwd: 'bower_components/',  // set working folder / root to copy
			    	src: '**/*',           // copy all files and subfolders
			    	dest: 'build/bower_components',    // destination folder
			    	expand: true           // required when using cwd
			 	},
			 	views: {
			    	cwd: 'app/',  
			    	src: 'views/**/*',           
			    	dest: 'build/app',    
			    	expand: true           
			 	}
				,
			 	images: {
			    	cwd: 'app/',  
			    	src: 'images/*',           
			    	dest: 'build/app',    
			    	expand: true           
			 	},
			 	scss: {
			    	cwd: 'app/',  
			    	src: 'styles/scss/*',           
			    	dest: 'build/app',    
			    	expand: true          
			 	},
			 	jsons: {
			    	cwd: 'app/',  
			    	src: 'scripts/json/*',           
			    	dest: 'build/app',    
			    	expand: true          
			 	}
			},
			sass: {                              // Task
			    dist: {                            // Target
			      options: {                       // Target options
			        style: 'expanded'
			      },
			      files: [{                         // Dictionary of files
			      	expand:true,
			      	cwd:"app/styles/scss/",
			      	src:['*.scss'],
			      	dest:'app/styles/css/',
			      	ext:'.css'
			      }]
			    }
			  }
	});

	// to load all grunt dependencies altogether
	require('load-grunt-tasks')(grunt);
	
	grunt.registerTask("test",['karma']);
	grunt.registerTask("listen",['build','watch','karma']);
	grunt.registerTask("commit",['jsbeautifier']);
	
	grunt.registerTask("build",[
		'sass',
		'copy',
		'uglify',
		"replace",
		'cssmin'
		]);

	

  	grunt.registerTask('default', ['build']);
}
