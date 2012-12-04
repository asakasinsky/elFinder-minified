/*global module:false*/
var fs = require('fs');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        files: '<config:lint.files>',
        tasks: 'csslint concat'
      },
      css: {
        files: ['distr/css/*.css', 'distr/css/*.less'],
        tasks: 'recess:main'
      }
    },
    recess: {
      main: {
        src:
        [
          'distr/css/*.css'
        ],
        dest: 'distr/temp/elfinder.raw.css',
        options: {
          noOverqualifying: false,
          noUniversalSelectors: false,
          noUnderscores: false,
          compile: true
        }
      },
      publish_main: {
        src:
        [
          'build/elfinder.css'
        ],
        dest: 'build/elfinder.min.css',
        options: {
          noOverqualifying: false,
          noUniversalSelectors: false,
          noUnderscores: false,
          compile: true,
          compress: true
        }
      }
    },
    lint: {
      files: ['grunt.js', 'distr/js/*.js', 'distr/js/common/*.js']
    },
    concat: {
    main:
    {
        src:
        [
          'distr/js/elfinder.full.js',
          'distr/js/i18n/elfinder.ru.js'
        ],
        dest: 'build/elfinder.js'
      }
    },
    min: {
      main: {
        src: '<config:concat.main.dest>',
        dest: 'build/elfinder.min.js'
      }
    },
    csslint: {
      base_theme: {
        src: 'recess:main',
        rules: {
          'import': false,
          'overqualified-elements': 2
        }
      }
    },
    imgo: {
      icons: {
        files: [
          'distr/img/*.png',
          'distr/img/*.gif',
          'distr/img/*.jpeg',
          'distr/img/*.jpg'
        ]
      }
    },
    imageEmbed: {
        dist: {
          src: ['<config:recess.main.dest>'],
          dest: 'build/elfinder.css',
          deleteAfterEncoding : false
        }
      },


    jshint: {
      options: {
        browser: true,
        curly: true,
        eqeqeq: true,
        newcap: true,
        undef: true,
        eqnull: true,
        asi:true,
        boss: false
      },
      globals: {
        jQuery: true,
        exports: true,
        console: false,
        alert: false,
        prompt: false
      }
    },
    clean: {
      folder: 'distr/temp/'
    }
  });

grunt.loadNpmTasks('grunt-recess');
grunt.loadNpmTasks('grunt-css');
grunt.loadNpmTasks('grunt-imgo');
grunt.loadNpmTasks('grunt-image-embed');
grunt.loadNpmTasks('grunt-clean');


grunt.registerTask('default', '');
grunt.registerTask('build', 'recess:main imgo imageEmbed recess:publish_main concat min clean');
//grunt.registerTask('build', 'recess:main dataUri');
};
