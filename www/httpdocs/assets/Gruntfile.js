module.exports = function(grunt){
     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          compass :{
               dist :{
                    options: {
                      config: './config.rb'
                    }
               }
          },
          coffee: {
               compileWithMaps: {
                    options: {
                         bare: false
                         , sourceMap: true
                         , join: true
                    },
                    files: {
                         "scripts/index.video.js": [
                              "scripts/_src/index.video.coffee"
                         ]
                         , "scripts/index.sp.nav.js": [
                              "scripts/_src/index.sp.nav.coffee"
                         ]
                         , "scripts/index.controller.js": [
                              "scripts/_src/_define.coffee"
                              , "scripts/_src/index.mainview.coffee"
                              , "scripts/_src/index.nav.coffee"
                              , "scripts/_src/index.controller.coffee"
                         ]
                         , "scripts/index.flaotbox.js": [
                              "scripts/_src/index.flaotbox.coffee"
                         ]
                         , "scripts/pagetop.js": [
                              "scripts/_src/pagetop.coffee"
                         ]
                    }
               }
               // compile: {
               //      files: [{
               //           bare: false
               //           , sourceMap: true
               //           , join: true
               //           , expand: true
               //           , cwd: 'scripts/_src/'
               //           , src: ['**/*.coffee']
               //           , dest: 'scripts/'
               //           , ext: '.js'
               //      }]
               // }
          },
          uglify: {
               options: {
                    compress: {
                         drop_console: true
                    }
               }
               , index: {
                    files: {
                         "scripts/index.min.js": [
                              "scripts/index.js"
                         ]
                    }
               }
               , resindex: {
                    files: {
                         "scripts/res-index.min.js": [
                              "scripts/res-index.js"
                         ]
                    }
               }
          },
          concat_css: {
               index: {
                    files: {
                         "styles/index.min.css": [
                              "styles/index.css"
                              , "styles/index-desktop.css"
                              , "styles/index-sp.css"
                         ]
                    }
               }
          },
          watch :{
               styles: {
                    //監視ファイル
                    files: ['styles/_src/*.scss']
                    //実行タスク
                    , tasks:['compass', 'concat_css']
               }
               , scripts: {
                    //監視ファイル
                    files: ['scripts/_src/*.coffee', 'scripts/_src/**/*.coffee']
                    //実行タスク
                    , tasks:['coffee']
               }
               , uglify: {
                    //監視ファイル
                    files: ['scripts/_libs/*.js', 'scripts/index.js', 'scripts/res-index.js', 'scripts/log.js', 'scripts/video.js', 'scripts/styles.js']
                    //実行タスク
                    , tasks:['uglify']
               }
          }
     });

     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-compass');
     grunt.loadNpmTasks('grunt-contrib-coffee');
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-cssmin');
     grunt.loadNpmTasks('grunt-concat-css');
     grunt.registerTask('default', [ 'watch' ]);
};