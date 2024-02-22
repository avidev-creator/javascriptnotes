function userOps (name, age){
    this.name = name;
    this.age = age;
}

userOps.prototype.printme = function (){ 
    console.log(`Hello ${this.name}. You are ${this.age} years old.`);
}

const firstUser = new userOps("Avinash", 32);
firstUser.printme()