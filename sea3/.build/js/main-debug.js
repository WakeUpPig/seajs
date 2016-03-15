define("./dist/js/main-debug", [ "./drag-debug", "./util-debug", "./limit-debug" ], function(require, exports, module) {
    //主函数
    var oDiv = document.querySelector("#div1");
    var Drag = require("./drag-debug").Drag;
    var d = new Drag(oDiv);
});