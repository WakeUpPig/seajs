define(function (require,exports,module) {
    //主函数
    console.log(module.dependencies);
    console.log(require.resolve('./drag'))
    
    var oDiv = document.querySelector('#div1');
    var Drag = require('./drag').Drag;
    var d= new Drag(oDiv);
    console.log(exports==module.exports)

});
