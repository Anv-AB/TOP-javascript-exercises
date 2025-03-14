const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((acc, item) => acc + item, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, item) => acc * item, 1)
};

const power = function(num1, num2) {
  return Math.pow(num1,num2)
};

const factorial = function(num) {
	let final = 1;
  for (let i = 1; i <= num; i++) {
    final *= i
  }
  return final;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
