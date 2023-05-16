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

    printMyName = () =>{
        console.log(this.name);
    }
}

const modernPerson = new PersonModern();
modernPerson.printMyName();
modernPerson.printGender();