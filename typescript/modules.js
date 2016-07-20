//everything declared in JS is available in global scope so when we decalare a variable that has been already
//decalared then we actually override it . this may also happen due to clash of variables declared by some 
//library and our code .Modules is the solutions
//Internal and external modules are avaliable
//internal modules
var myModule;
(function (myModule) {
    function sayHi(name) {
        return "hi" + name;
    }
    myModule.sayHi = sayHi;
    counter: number = 0;
})(myModule || (myModule = {}));
