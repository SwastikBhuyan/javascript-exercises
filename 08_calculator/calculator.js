const add = function(a,b) {
  return (a+b);
};

const subtract = function(a,b) {
  return (a-b);
};

const sum = function(...rest) {
  let sum = 0;
	for (value of rest) {
    if (Array.isArray(value)) {
      for (let i of value) {
        sum += i;
      }
      return sum;
    }
    else {
      sum += value;
    }
  }
};

const multiply = function(...rest) {
  let sum = 1;
  for (let value of rest) {
    for (i of value) {
      sum *= i;
    }
  }
  return sum;
};

const power = function(a,b) {
  result = 1;
  for (i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  let result = 1;
  if (a > 0) {
    for (i = 1; i <= a; i++) {
      result *= i;
    }
    return result;
  }
  else if (a == 0) {
    return 1;
  }
  else return 0;
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
