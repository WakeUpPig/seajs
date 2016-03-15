define("jwseajs/hello/1.0.0/js/main-debug", [ "./drag-debug", "./util-debug", "./limit-debug" ], function(require, exports, module) {
    //主函数
    var oDiv = document.querySelector("#div1");
    var Drag = require("./drag-debug").Drag;
    var d = new Drag(oDiv);
});

define("jwseajs/hello/1.0.0/js/drag-debug", [ "jwseajs/hello/1.0.0/js/util-debug", "jwseajs/hello/1.0.0/js/limit-debug" ], function(require, exports, module) {
    var util = require("jwseajs/hello/1.0.0/js/util-debug");
    var limit = require("jwseajs/hello/1.0.0/js/limit-debug").limit;
    function Drag(ele) {
        //ele可以拖动的元素
        //定义初始值
        this.x = 0;
        this.y = 0;
        this.ele = ele;
        //设置一个鼠标按下事件
        var that = this;
        this.ele.onmousedown = function(ev) {
            util.toggle(this, "yellow");
            that.mousedown(ev);
        };
    }
    Drag.prototype.mousedown = function(ev) {
        //当鼠标按下时鼠标距离盒子的位置
        //当前鼠标的位置-当前元素距离浏览器的偏移量
        this.x = ev.clientX - this.ele.offsetLeft;
        this.y = ev.clientY - this.ele.offsetTop;
        //调用move事件 和 up事件
        var that = this;
        //防止鼠标脱离this.ele元素
        document.onmousemove = function(ev) {
            that.mousemove(ev);
        };
        document.onmouseup = function(ev) {
            that.mouseup(ev);
        };
    };
    Drag.prototype.mousemove = function(ev) {
        //move方法设置当前盒子的位置
        //当前距离浏览器的位置 - 刚才我们计算的鼠标按下时鼠标距离盒子的位置 = 盒子距离浏览器的位置
        var L = ev.clientX - this.x;
        var T = ev.clientY - this.y;
        //在移动的时候限制范围
        L = limit(L, document.documentElement.clientWidth - this.ele.offsetWidth, 0);
        T = limit(T, document.documentElement.clientHeight - this.ele.offsetHeight, 0);
        this.ele.style.left = L + "px";
        this.ele.style.top = T + "px";
    };
    Drag.prototype.mouseup = function(ev) {
        //清除document上的所有事件
        util.toggle(this.ele, "yellow");
        document.onmouseup = document.onmousemove = null;
    };
    exports.Drag = Drag;
});

define("jwseajs/hello/1.0.0/js/util-debug", [], function(require, exports, module) {
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

define("jwseajs/hello/1.0.0/js/limit-debug", [], function(require, exports, module) {
    //当前值 最大值 最小值
    function limit(val, max, min) {
        if (val > max) {
            //如果当前值大于最大的那就把最大的返回
            return max;
        } else if (val < min) {
            return min;
        } else {
            return val;
        }
    }
    exports.limit = limit;
});
