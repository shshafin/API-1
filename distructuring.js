// destructure from object
const info = {
  name: "shafin",
  phone: "01798460435",
  age: 19,
};
// regular method
// const phone = info.phone;
// const age = info.age;

// destructuring == if right side is a object then left side also a object as usual
const { phone, age: boyosh, name } = info; //can change property name

// console.log(phone);
// console.log(boyosh);
// console.log(name);

// destructure from array
function number(a, b) {
  return [a * 2, b * 3];
}
const [first, second] = number(2, 3);
console.log(first, second);
