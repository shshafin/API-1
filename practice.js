// 1
const multi = (a, b, c) => a * b * c;
// console.log(multi(1, 2, 3));

// 2
// console.log(`i am a web developer.i love to code.i love to eat biriyani`);

// 3
const add = (a, b = 0) => a + b;
// console.log(add(2));

// 4
let a = 12,
  b = 3;
[a, b] = [b, a];
console.log(a, b);
