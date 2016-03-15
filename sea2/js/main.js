define(function (require,exports,module) {
    //主函数
    var oDiv = document.querySelector('#div1');

    var Drag = require('./drag').Drag;

    var d= new Drag(oDiv);

})
