import { userAlphabets, users } from "../data/users.js";

const filterUser = users.filter(user =>
  user.first_name.startsWith("J")
);

const FindUser = users.find(user =>
  user.id === 5
);

const MapUser = users.map(user => {
  return {
    ...user,
    full_name: `${user.first_name} ${user.last_name}`
  }
});
// console.log("Filtered Users:", MapUser[1]);


const filterUserAlphabet = userAlphabets.filter(user => {
  /* -----------------------------------------------------
    doan code duoi dung vong lap forEach de kiem tra
  -----------------------------------------------------*/
  let found = false;
  const keySearch = "AAA"
  user.tags.forEach(tag => {
    if (tag === keySearch) {
      found = true;
    }
  });
  return found;

  /* -----------------------------------------------------
    doan code tren dai 
    co the viet ngan gon hon bang cach dung includes
    ARRAY.SOME() => kiểm tra xem có phần tử nào trong mảng thỏa mãn điều kiện không, trả về true/false
    ARRAY.EVERY() => kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện không, trả về true/false
  -----------------------------------------------------*/

  return user.tags.some(tag => {
    return tag === "KHW"
  })
})
// console.log("🚀 ~ filterUserAlphabet:", filterUserAlphabet);


  /* -----------------------------------------------------
    ARRAY.REDUCE() => giúp gộp tất cả các phần tử trong mảng thành một giá trị duy nhất dựa trên hàm logic được cung cấp.
    Biến đổi 1 cái array thành 1 cái giá trị khác (có thể là array, object, number, string...)
    => giúp tùy biến được cái kiểu dữ liệu trả về
  -----------------------------------------------------*/

  const customUsers = users.reduce((accumulator, currenrUser) => {
    // mỗi return trả về sẽ là giá trị của accumulator (tích lũy) ở lần lặp tiếp theo
    return { ...accumulator, [currenrUser.email]: currenrUser  };
  }, {}); // khởi tạo accumulator là một mảng rỗng []

  /* -----------------------------------------------------
    rán object thành array
  -----------------------------------------------------*/
  const arrayUsers = Object.values(customUsers).reduce((accumulator, currenrUser) => {
    // mỗi return trả về sẽ là giá trị của accumulator ở lần lặp tiếp theo
    // accumulator.push(currenrUser);
    return [...accumulator, currenrUser.email];
  }, []); // khởi tạo accumulator là một mảng rỗng []


  /* -----------------------------------------------------
    Ví dụ khác về reduce
  -----------------------------------------------------*/
  const numers = [1, 2, 3, 4, 5];
  const sum = numers.reduce((total, currentNumber) => {
    return total + currentNumber;
  }, 0); // khởi tạo total là 0

  console.log("🚀 ~ sum:", sum);