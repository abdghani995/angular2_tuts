//everything declared in JS is available in global scope so when we decalare a variable that has been already
//decalared then we actually override it . this may also happen due to clash of variables declared by some 
//library and our code .Modules is the solutions
//Internal and external modules are avaliable

//internal modules
module myModule{
    export function sayHi(name:string):string {
        return "hi"+name;
    }
    function sayHello() {
        return "hello"
    }
} 

myModule.sayHi("abdullah");
//myModule.sayHello()       //will cause error because sayHello is not exported out of the module


//external modules
//import myModule = module("myModules")
//import{Car,CarsParts} from 'cars' // can import selected modules from a class


//---------------------------------------------------------------------------------------------

//Decorators
//its an experssion that is evaluated after a class has been defined ,that can be used to annotate or modify
//the class