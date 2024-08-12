const convertToCelsius = function(degFah) {
  let degCel = (degFah - 32) * 5 / 9; 

  return Math.round(degCel * 10) / 10;
};

const convertToFahrenheit = function(degCel) {
  let degFah = degCel * 9 / 5 + 32;

  return Math.round(degFah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
