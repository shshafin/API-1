function add(num1, num2 = 0) {  //they are parameter
  //default value===>0
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}

add(5); //they are argument
 //not assign num2 value
