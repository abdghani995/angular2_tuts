//we cant change the structure of function later
//object
var person = {
    fname: "abdullah",
    lname: "ghani"
};
function receivePerson(person) {
    person.sayHi();
}
//-----------------------------------------------------------------------------------
//classes
var CPerson = (function () {
    function CPerson(firstName, lastName, age) {
        if (lastName === void 0) { lastName = "ghani"; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    CPerson.prototype.getname = function () {
        return this.firstName + this.lastName;
    };
    return CPerson;
}());
var newPerson = new CPerson("abdullah"); //second parameter is taken by default as "ghani"
