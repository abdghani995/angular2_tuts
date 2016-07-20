//we cant change the structure of function later
//object
var person = {
    fname : "abdullah",
    lname : "ghani"
}

//person.abc = "abc"    //this will cause error because we are adding a field to person


//-----------------------------------------------------------------------------------

//interface
interface IPerson{
    firstName:string;
    lastName:string;
    sayHi?:()=>"say_hi"  //'?'denotes that when we implement it we may or may not declare it
                        //in child class/inteface.But if we remove '?' then we have to declare
}
function receivePerson(person:IPerson) {
    person.sayHi();
}
//inheritance
interface IEmployee extends IPerson{

}

//-----------------------------------------------------------------------------------

//classes

class CPerson implements IPerson{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string="ghani",age?:number){   //can specify default parameters like this 'ghani'
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getname(){
        return this.firstName+this.lastName;
    }
}
var newPerson = new CPerson("abdullah"); //second parameter is taken by default as "ghani"
                                        // age is an optional parameter denoted by '?'

//typescript also supports features like getters and setters and function overloading


//----------------------------------------------------------------------------------

//class inheritance
class CEmployee extends CPerson{
    position:string;
    constructor(firstName:string,lastName:string,position:string){
        super(firstName,lastName)
        this.position = position
    }
}