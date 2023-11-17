// regular max
const max = Math.max(1, 2, 3, 4, 5, 6, 7);
console.log(max);

// max(...value)
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(Math.max(array)); //output NaN
console.log(Math.max(...array)); //... get only the value from array

// use spread operator
const num = [1, 2, 3, 4];
const num1 = num;
num1.push(7);
// console.log(num, "\n", num1); // both gives same output

const num2 = [...num];
num2.push(28, 29);
console.log(num, num2); //using spread operator now only num2 push

// advance way
const num3 = [...num, 10, 20];
console.log(num,num3);
