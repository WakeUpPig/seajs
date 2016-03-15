//function Dialog(){
//    alert(1)
//}
//定义一个模块
//define(function () {
//
//})
//定义一个字符串的模块
//define('hello');


//直接返回一个对象模块
//独立的模块可以直接导出
//define({
//    Dialog: function () {
//        alert(1)
//    }
//})

define(function (require,exports,module) {
    //这三个参数是不可以更改的
    //var a = require('./b.js');

    //回掉函数的方式
    //require.async('./b.js', function (a) {
    //    a.Dialog();
    //});
    //function Dialog(){
    //    alert(1)
    //};
    //Dialog();

    var namespace={
        fn1: function () {
            alert(1)
        },
        fn2: function () {
            alert(2)
        },
        fn3: function () {
            alert(3)
        }
    };
    //导出单个方法
    //exports.namespace = namespace;
    //导出多个方法
   // module.exports= namespace;
    //module.exports == return
    return namespace;

})


//var obj1={
//    Dialog: function () {
//        alert(1)
//    }
//}
