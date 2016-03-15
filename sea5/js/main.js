define(function (require,exports,module) {
    //主函数
    //console.log(module.dependencies);
    //console.log(require.resolve('./drag'))
    //先拿到模板
    var html = require('../template.html');
    var obj = {
        list:"name"
    };
    //先编译模板
    var source = Handlebars.compile(html);
    //用数据渲染模板
    var html = source(obj);
    var oDiv = document.querySelector('#div1');
    //渲染好的数据渲染到dom元素里
    oDiv.innerHTML = html;
    var Drag = require('./drag').Drag;
    var d= new Drag(oDiv);
    console.log(exports==module.exports)

});
