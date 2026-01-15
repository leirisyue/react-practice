/*
ES5 Features:
1. let, const
2. Template Literals
3. Enhanced Object properties
4. Extended Parameter handling
5. Arrow Functions
6. Destructuring Assignment
7. Class Syntax
8. Promises
*/

// 1. Default Parameters--------------------------------
// scopes nơi biến được truy xuất và sử dụng giá trị

// global scope ES5
var x = 1;

// functional scope ES5
function fncX() {
  var x = 2
  return x * 2
}

// block scope 
for (var i = 0; i < 5; i++) {
  // var i is still accessible here
}
for (let j = 0; j < 5; j++) {
  // let j is only accessible within this block
}

// 2. Template Literals--------------------------------
// ES5
var nameES5 = "John";
var greetingES5 = "Hello, " + nameES5 + "!";
// ES6
const nameES6 = "John";
const greetingES6 = `Hello, ${nameES6}!`;

// 3. Enhanced Object Properties-----------------------
// -------Property Shorthand-------
const age = 30;
// ES5
const getUserES5 = {
  name: "Alice",
  age: age
};
// ES6
const getUserES6 = {
  name: "Alice",
  age
};

// -------Method properties-------
// ES5
function personES5(name, age) {
  return {
    name: name,
    age: age,
    getName: function() {
      return this.name + " - " + this.age;
    }
  }
}
// ES6
function personES6(name, age) {
  return {
    name,
    age,
    getName() {
      return this.name + " - " + this.age;
    }
  }
}

// -------Computed Property Key-------
const keyPart = "Name";
// ES5
var personKeyes5 = {
  name : "Bob",
  age: 25
}
var salary = "Salary";
personKeyes5[salary + "USD"] = 50000;
// ES6
const personKeyES6 = {
  name: "Bob",
  age: 25,
  [salary + "USD"]: 50000
};

// 4. Extended Parameter handling--------------------------------
// -------Rest Parameters-------
function sumES5() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
}
function sumES6(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
// console.log("🚀 ~ sumES5(1,2,3,4):", sumES5(1,2,3,4));
// console.log("🚀 ~ sumES6(1,2,3,4):", sumES6(1,2,3,4));
// -------Spread Operator-------
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedES5 = arr1.concat(arr2);
const combinedES6 = [...arr1, ...arr2];
console.log("🚀 ~ combinedES5:", combinedES5);
console.log("🚀 ~ combinedES6:", combinedES6);