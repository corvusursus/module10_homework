// задание 5

let arr = ["bip", "bopbop", "bipbipop"];
console.log(arr.length);
arr.forEach ((item, index, array) => {
  console.log(`У ${item} индекс ${index} в ${array}`);
})