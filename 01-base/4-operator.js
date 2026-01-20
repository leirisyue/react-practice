// -------------------------------------
// 1. Optional Chaining (?.)
// -------------------------------------

/*
Định nghĩa:
- Cho phép truy cập vào các propoerties của một object một cách an toàn (thuộc tính của 1 object hoặc lời gọi cũa một function)
- Nếu object đang truy cập là null hoặc undefined, ngay lập tức dừng thực thi và trả về undefined
*/

const people = {
  name: "John",
  age: 28,
  job: {
    title: "Developer",
    level: "Senior",
    getLevel(){
      return this.level;
    }
  }
}

let childrenname = people?.children?.name; //  cannot read property 'name' of undefined
// cách truyền thống
let childrennameTraditional = people && people.children && people.children.name; // hạn chế
// nếu object lồng vào nhau quá nhiều cấp thì sẽ rất dài dòng và khó đọc

let childrennameSafe = people?.children?.name; // undefined

// funtion nằm trong object mà không chắc nó có tồn tại hay không
let jobLevel = people?.job?.getLevel?.(); // Senior
// nếu không có dấu ? thì sẽ báo lỗi cannot read property 'getLevel' of undefined

// -------------------------------------
// 2. Nullish Coalescing Operator (??)
// -------------------------------------

// toán tử vế bên trái nếu khác NULL hoặc UNDEFINED thì lấy vế bên trái, ngược lại lấy vế bên phải

function getCity(people) {
  const city = people.address?.city ?? "Unknown City";
  return city;
}

getCity({ name: "Alice" }); // "Unknown City"
getCity({ name: "Bob", address: { city: "New York" } }); // "New York"

// NOTE: || và ?? 
// ||: falsy values (0, '', false, null, undefined)
// ??: null, undefined


// -------------------------------------
// falsey values (||) => 0, '', false, null, undefined, empty string, NaN
// nulish values (??) => null, undefined
// -------------------------------------


// -------------------------------------
// 3. Logical Assignment Operators
// -------------------------------------
// kết hợp toán tử logic (&&, ||, ??) với phép gán (=)

// OR assignment (||=)
let a = null;
a ||= 10; // a = a || 10
// a bây giờ là 10
let b = 5;
b ||= 10; // b = b || 10
// b vẫn là 5 vì 5 là truthy
// AND assignment (&&=)
let c = 20;
c &&= 30; // c = c && 30
// c bây giờ là 30
let d = 0;
d &&= 40; // d = d && 40
// d vẫn là 0 vì 0 là falsy
// Nullish assignment (??=)
let e = null;
e ??= 50; // e = e ?? 50
// e bây giờ là 50
let f = undefined;
f ??= 60; // f = f ?? 60
// f bây giờ là 60
let g = 70;
g ??= 80; // g = g ?? 80
// g vẫn là 70 vì 70 không phải là nullish

