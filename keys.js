const glass = {
  color: "orange",
  price: 12,
  isClean: true,
};

console.log(Object.values(glass));
// [ 'orange', 12, true ]

console.log(Object.keys(glass));
// [ 'color', 'price', 'isClean' ]

console.log(Object.entries(glass));
// array of array ,two dimensional array
//  [
//     [ 'color', 'orange' ],
//     [ 'price', 12 ],
//     [ 'isClean', true ]
//  ]

// delete a element from object
delete glass.isClean;
// console.log(glass);

// another method
const { isClean, ...shortGlass } = glass;
// console.log(shortGlass);

// freeze
Object.freeze(glass);

// seal
Object.seal(glass); //give permission for modifying
