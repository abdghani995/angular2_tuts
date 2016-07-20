var x = null;
if (typeof x === 'string') {
    console.log(x.substr(1));
}
var add = function (x, y) {
    return x + y;
};
var $ = function (id) { return document.getElementById(id); };

var Calc = (function () {
    function Calc() {
    }
    Calc.prototype.add = function (x, y) {
        return x + y;
    };
    return Calc;
}());
