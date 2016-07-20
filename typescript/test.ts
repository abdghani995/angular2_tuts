var x: any = null;
if(typeof x === 'string') {
   console.log(x.substr(1)); 
// x is still any here
}

var add = function(x:number,y:number): number{
	return x+y;
}

var $ = (id) => document.getElementById(id)

class Calc{
	add(x:number,y:number):number{
		return x+y
	}
}