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
// -----------------------------------------
// 1. Default Parameters
// -----------------------------------------
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

// -----------------------------------------
// 2. Template Literals
// -----------------------------------------
// ES5
var nameES5 = "John";
var greetingES5 = "Hello, " + nameES5 + "!";
// ES6
const nameES6 = "John";
const greetingES6 = `Hello, ${nameES6}!`;

// -----------------------------------------
// 3. Enhanced Object Properties
// -----------------------------------------
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
    getName: function () {
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
  name: "Bob",
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

// -----------------------------------------
// 4. Extended Parameter handling
// -----------------------------------------
// -------Default Parameters-------
function greetES5(name) {
  name = name || "Guest";
  return "Hello, " + name;
}
function greetES6(name = "Guest") {
  return `Hello, ${name}`;
}
// -------Rest Parameters-------
function sumES5() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}
function sumES6(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
// console.log("🚀 ~ sumES5(1,2,3,4):", sumES5(1,2,3,4));
// console.log("🚀 ~ sumES6(1,2,3,4):", sumES6(1,2,3,4));

function getNameES6(name = "Sam", age = 30, ...rest) {
  // console.log("🚀 ~ name:", name);
  // console.log("🚀 ~ rest:", rest);
}
getNameES6("David", 40, "extra1", "extra2");
// -------Spread Operator-------
//  VD1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9, ...arr1];
// VD2
const combinedES5 = arr1.concat(arr2);
const combinedES6 = [...arr1, ...arr2];
// VD3
const person = {
  name: "Eve",
  age: 28
};

const worker = {
  job: "Engineer",
  ...person
}

// -----------------------------------------
// 5. Arrow Functions
// -----------------------------------------
// ES5
var personFuncES5 = {
  name: "Frank",
  age: 23,
  getDescription: function () {
    console.log("ES5: " + this.name + " is " + this.age + " years old.");

    var tmp = this;
    function getAge() {
      console.log("ES5 Age: " + tmp.age);
    }
    getAge()
  }
}
// personFuncES5.getDescription();  // undefined do khai baos 1 function trong 1 function khác nên this trỏ tới global object
// this trong hàm thông thường trỏ tới đối tượng gọi hàm => trong ES5 

// ES6
const personFuncES6 = {
  name: "Frank",
  age: 23,
  getDescription: function () {
    console.log(`ES6: ${this.name} is ${this.age} years old.`);

    const getAge = () => {
      console.log(`ES6 Age: ${this.age}`);
    }
    getAge();
  }
}
// personFuncES6.getDescription();
// this trong arrow function trỏ tới ngữ cảnh nơi nó được định nghĩa => trong ES6

// -----------------------------------------
// 6. Destructuring Assignment
// -----------------------------------------
// -------Array Destructuring-------
// VD1
const rgbES5 = [255, 200, 100];
var redES5 = rgbES5[0];
var greenES5 = rgbES5[1];
var blueES5 = rgbES5[2];
const [redES6, _, blueES6] = rgbES5;

// VD2
const personArrayES5 = {
  name: "Grace",
  age: 29,
  salary: 60000
}
const { name: nameArrayES6, salary: salaryArrayES6 } = personArrayES5;

// VD3
const listArrayES6 = [10, 20, 30, 40, 50];
const [first, second, third = 10, ...restList] = listArrayES6;
// third sẽ nhận giá trị 30 từ mảng listArrayES6 nên giá trị mặc định 10 sẽ không được sử dụng

//  VD4
const getFullNameArrayES6 = ({ name, age }) => {
  return `${name} is ${age} years old.`;
}
getFullNameArrayES6({ name: "Hank", age: 35 });


// -------Object Destructuring-------
// VD1
const rgbObjectES5 = {
  red: 255,
  green: 200,
  blue: 100
}
var redObjES5 = rgbObjectES5.red;
var greenObjES5 = rgbObjectES5.green;
var blueObjES5 = rgbObjectES5.blue;
const { red: redObjES6, green: greenObjES6, blue: blueObjES6 } = rgbObjectES5;

// -----------------------------------------
// 7. Class Syntax => kế thừa
// -----------------------------------------
// ES5 => kế thừa prototype
function AnimalES5(name, species) {
  // this ở đây đang tham chiếu đến đối tượng mới được tạo ra từ hàm khởi tạo AnimalES5
  // giá trị this sẽ phụ thuộc vào cách hàm được gọi
  this.name = name;
  this.species = species;

  // console.log(this)
}
// this đang tham chiếu đến đối tượng toàn cục (global object) khi không sử dụng từ khóa new
var a = new AnimalES5("Lion", "Wild");
// mọi object trong js có 1 prototype 
// gọi 1 thuộc tính hoặc phương thức không tồn tại trực tiếp trên đối tượng thì js sẽ tìm kiếm trong prototype của đối tượng đó
AnimalES5.prototype.getInfo = function () {
  return this.name + " is a " + this.species;
}
// nếu thuộc tính đó không thuộc prototype thì js sẽ tiếp tục tìm kiếm trong prototype của prototype đó
// quá trình này tiếp tục cho đến khi tìm thấy thuộc tính hoặc phương thức hoặc đến cuối chuỗi prototype (prototype chain)
// console.log("🚀 ~ a.getInfo():", a.getInfo());
// prototype là cấu trúc cây

var b = Object.create(new AnimalES5("Elephant", "Wild"));
// console.log("🚀 ~ b.name:", b.name);
b.name = "Elephant Baby";
// console.log("🚀 ~ b.getInfo():", b.getInfo());


// ES6
class AnimalES6 {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  getInfo() {
    return `${this.name} is a ${this.species}`;
  }
}

class Bird extends AnimalES6 {
  constructor(name, species, canFly) {
    super(name, species);  // gọi hàm khởi tạo của lớp cha
    this.canFly = canFly;
  }
  getInfo() {
    const parentInfo = super.getInfo(); // gọi phương thức của lớp cha
    return `${parentInfo}. Can fly: ${this.canFly}`;
  }
}

const c = new AnimalES6("Tiger", "Wild");
// console.log("🚀 ~ c.getInfo():", c.getInfo());
const d = new Bird("Parrot", "Wild", true);
// console.log("🚀 ~ d.getInfo():", d.getInfo())

// -----------------------------------------
// 8. Promises => asynchronous programming
// -----------------------------------------
// kết quả trả về không có ngay lập tức mà sẽ có trong tương lai
// ES5 => Callback
function getAllDataFromDBES5(callback) {
  console.log('start')
  setTimeout(() => {
    const data = ['data1', 'data2', 'data3'];
    callback(data);
    console.log('getting data from DBES5')
  }, 3000)
  console.log('end')
}

// @@ Sử dụng callback để xử lý bất đồng bộ trong ES5
getAllDataFromDBES5(function(data){
  // data được trả về sau 3 giây từ DB giả lập
  // xử lý asynchronous ở đây phức tạp khi có nhiều callback lồng nhau
  // rât khó để quản lý luồng dữ liệu
  console.log("🚀 ~ data from ES5:", data);
});

// ES6 => Promise
// promise có 3 trạng thái: pending (đang chờ), fulfilled (hoàn thành), rejected (bị từ chối)
// có 2 parameter: resolve (khi promise thành công), reject (khi promise thất bại)
const getAllDataFromDBES6 = new Promise((resolve, reject) => {
  console.log('start')
  setTimeout(() => {
    const data = ['data1', 'data2', 'data3'];
    resolve(data);
    reject(new Error('Failed to fetch data'));
    console.log('getting data from DBES6')
  }, 3000)
  console.log('end')
});

getAllDataFromDBES6
  .then((data) => {
    // xử lý khi promise được giải quyết thành công
    console.log("🚀 ~ data from ES6:", data)
  })
  .catch ((error) => {
    // xử lý khi promise bị từ chối
    // thực thi khi reject được gọi
    console.error("Error fetching data:", error);
  });
