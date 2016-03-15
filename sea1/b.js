define(function (require,exports,module) {
    //依赖需要  需要哪个文件 我们就把哪个文件引进来
    function Dialog(){
        alert(2)
    }
    //把dialog模块进行导出
    exports.Dialog=Dialog;
})