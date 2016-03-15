define("./dist/js/util-debug", [], function(require, exports, module) {
    /*
    * 主要就是一个工具库
    *
    * */
    /* var util = {
        //增加样式
        addClass: function (ele,className) {
            ele.classList.add(className);
        },
        //移除样式
        removeClass: function () {
            ele.classList.remove(className);
        }
    }*/
    function toggle(ele, className) {
        //h5的toggle方法
        //ele.classList获得样式列表 是一个数组形式
        ele.classList.toggle(className);
    }
    exports.toggle = toggle;
});