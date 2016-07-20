
//here name has become string type which cant be changed
var name = "abdullah"
//name = 10   			// this line will give error as we are declaring integer to string

//---------------------------------------------------------------------------------

//types
var test:string	=	 ""
var age:number	= 	1
var cars:Array<string>	= []

//----------------------------------------------------------------------------------

//can assign types to arguments of function
var foo = function (name:string) {
    console.log("name = "+name);
}
// foo(2)   //cant call using an integer like this

//----------------------------------------------------------------------------------

var bar = function (name:any) {
    console.log("name = "+name);
}
bar(123)    //wont cause any error as it can accept ANY type 

//------------------------------------------------------------------------------------

//we can alo mention return types of functions 
function getname():string {
 //   return 1 ;    //will cause error
    return "ag"
}

//-----------------------------------------------------------------------------------

//types of function
//option 1
var fun1 = function (name:string):string {
    return name;
}
//option 2      // fat arrow
var fun2 = (name:string) => name;
//-----------------------------------------------------------------------------------

//IIF
()=> "abc"




