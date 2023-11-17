const glass = {
  color: "orange",
  price: 12,
  isClean: true,
};

//   for in loop
for (const key in glass) {
  const value = glass[key];
  console.log(key, value);
}

// for of loop
const keys = Object.keys(glass);
for (const key of keys) {
  //   console.log(key);
}


// for of use ==> array or string
// for in use ==> object