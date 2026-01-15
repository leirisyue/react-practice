import { users } from "../data/users.js";



// random 1 chuỗi 3 chữ cái (AAA - ZZZ)
const randomTag = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// random array tags (0 - 4 phần tử)
const randomTags = () => {
  const length = Math.floor(Math.random() * 5); // 0 -> 4
  return Array.from({ length }, randomTag);
};

// thêm tags cho mỗi user
const usersWithTags = users.map(user => ({
  ...user,
  tags: randomTags()
}));

console.log("🚀 ~ usersWithTags:", usersWithTags);
