const getAge = (person) => person.age;

const student = { name: "shafin", age: 19 };
console.log(getAge(student));

const number = (item) => item[2];

console.log(number([46, 67, 92, 6]));

// large arrow function
const doMath = (x, y, z) => {
  const plus = x + y + z;
  const multi = x * y * z;
  const result = multi - plus;
  return result;
};

console.log(doMath(2, 4, 6));
