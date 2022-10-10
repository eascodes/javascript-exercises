const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArr) {
	const total = numArr.reduce((total, num) => {
    return total + num;
  }, 0);
  return total;
};

const multiply = function(numArr) {
  const total = numArr.reduce((total, num) => {
    return total * num;
  });
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function factorialize(num) {
	if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
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
