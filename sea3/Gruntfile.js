module.exports = function (grunt) {
    grunt.initConfig({
        //任务
        concat:{
            sea3:{
                files:{
                    //输出文件的地址
                    //后者是要合并的文件名字
                    './dist/js/main.js':['./js/drag.js','./js/limit.js','./js/main.js','./js/util.js']

                }
            }
        }
    })
    //注册插件
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default',['concat']);
}