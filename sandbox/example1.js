var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Hello world!");
var x = 2;
var y;
var z;
y = "napis";
z = true;
z = false;
console.log(x + " " + y);
console.log(z);
var xd = [3, 2, 1];
var ys;
xd[0] = 4;
var zs = __spreadArray([1, 5, 7], xd, true);
console.log(zs);
console.log(xd.length);
console.log("Liczba x = ".concat(x));
