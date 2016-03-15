define("./dist/js/limit-debug", [], function(require, exports, module) {
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