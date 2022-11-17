// Declare returnFirstTwoDrivers
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (parameter) {
    console.log(parameter.slice(0, 2));
    return parameter.slice(0, 2);
}

// Declare returnLastTwoDrivers
const returnLastTwoDrivers = function(parameter) {
    console.log(parameter.slice(2, 4));
    return parameter.slice(2, 4);
}

// selectingDrivers Array
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
  return function(value) {
    return fareMultiplier * value;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, func) {
  return func(drivers);
}

function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray);
}