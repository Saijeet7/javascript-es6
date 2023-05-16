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
