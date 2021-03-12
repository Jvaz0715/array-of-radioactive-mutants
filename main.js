/******************
 * YOUR CODE HERE *
 ******************/

// addMeToEnd
// adds the string 'Colin' to the end of the given array

function addMeToEnd(array) {
  array.push('Colin')
}

//addMeToStart
// adds the string 'Colin' to the beginning of the given array

function addMeToStart(array) {
  array.unshift('Colin');
}

//changeLast
// changes, not adds, the last value in the given array to the given value

function changeLast(array, value) {
  array[array.length -1] = value;
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
