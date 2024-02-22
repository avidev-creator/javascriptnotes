function userOps (name, age){
    this.name = name;
    this.age = age;
}

userOps.prototype.printme = function (){ 
    console.log(`Hello ${this.name}. You are ${this.age} years old.`);
}

const firstUser = new userOps("Avinash", 32);
firstUser.printme()


/* Things To Remember -- 

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// This is to inject prototypes inside the core like Object, arrays ------

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.avi = function(){
    console.log(`Avinash is present in all objects`);
}

Array.prototype.heyAvi = function(){
    console.log(`Avi says hello`);
}

// heroPower.avi()
// myHeros.avi()
// myHeros.heyAvi()
// heroPower.heyAvi()

// Prototypal inheritance

const User = {
    name: "avinash",
    email: "example@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Avinash     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"summit".trueLength()
"coffee".trueLength()