// How to make class and use Constructor And Methods -------------

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const avi = new User("Avinash", "avi@gmail.com", "123");

console.log(avi.encryptPassword());
console.log(avi.changeUsername());

// Inheritance Using Classes -----------------------------

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new project was added by ${this.username}`);
  }
}

const newTeacher = new Teacher("atul", "atul@teacher.com", "123");

newTeacher.logMe();

const newUser = new User("Sumit");

newUser.logMe();

console.log(newTeacher instanceof User);

// Getter And Setters --------------

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}avi123`;
  }

  set password(value) {
    this._password = value;
  }
}

const avinash = new User("abc@google.com", "abc");
console.log(avinash.email);
console.log(avinash.password);
