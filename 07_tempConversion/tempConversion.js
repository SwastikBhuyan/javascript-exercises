const convertToCelsius = function(F) {
  let C = 5/9 * (F - 32);
  if (C % 1 == 0) {
    return C;
  }
  else return parseFloat(C.toFixed(1));
};

const convertToFahrenheit = function(C) {
  let F = (9/5 * C) + 32;
  if (F % 1 == 0) {
    return F;
  }
  else return parseFloat(F.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
