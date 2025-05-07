// 배열 구조 분해 할당 
const nameArr =["Gildong", "hong"];

const firstName = nameArr[0];
const lastName = nameArr[1];
console.log(firstName); //Gildong
console.log(lastName); //hong


const arr = ["first", "middle", "last"];
const [first, middle, last] = arr;
console.log(first); //first
console.log(middle); //second
console.log(last); //third