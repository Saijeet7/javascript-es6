// const and let
let myName = "Saijeet";
console.log(myName);

myName = "Rockstar";
console.log(myName);

//Arrow Functions

function printMyName(name) {
  console.log(name);
}

printMyName("Max");

const printMyNameArrow = (name) => {
  console.log(name);
};

printMyNameArrow("Arrow");

const printMyNameArrowEmpty = () => {
  console.log("Max Empty");
};

printMyNameArrowEmpty();

const printNameAge = (name, age) => {
  console.log(name, age);
};

printNameAge("Max", 7);

const multiply = (number) => number * number;
console.log(multiply(9));

// Classes in JS
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Max";
    this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

// Moder Classes, Properties and Methods

class HumanModern {
  gender = "male";
  printGender = () => {
    console.log(this.gender);
  };
}

class PersonModern extends HumanModern {
  name = "John";
  gender = "female";

  printMyName = () => {
    console.log(this.name);
  };
}

const modernPerson = new PersonModern();
modernPerson.printMyName();
modernPerson.printGender();

//The Spread and Rest Operator

const numbers = [1, 2, 3];
const newNumber = [...numbers, 4];

console.log(numbers);
console.log(newNumber);

const personSpread = {
  name: "John",
};

const newPersonSpread = {
  ...personSpread,
  age: 17,
};

console.log(personSpread);
console.log(newPersonSpread);

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3));

// Destructuring

const number = [1, 2, 3];
[num1, num2, num3] = number;

console.log(num3, num2);

// Reference types

const obj = {
  name: "Max",
};

const secondObj = obj;

const thirdObj = {
  ...obj,
};

obj.name = "Maximus";
console.log(secondObj);
console.log(thirdObj);


// Array methods
const arra = [1,2,3];

const dubleNum = arra.map((num) =>{
    return num * 2;
})

console.log(dubleNum);