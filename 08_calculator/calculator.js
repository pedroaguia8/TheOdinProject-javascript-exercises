const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	let sum = 0;

  for (const n of array) {
    sum += n;
  }

  return sum;
};

const multiply = function(array) {
  let total = 1;

  for (const n of array) {
    total *= n;
  }

  return total;
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(n) {
	if(n === 0 || n === 1)
    return 1;

  let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }

  return total;
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
