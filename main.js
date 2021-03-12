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

//changeAllValuesTo
// changes _every_ value in the given array to the given value

function changeAllValuesTo(array, value) {
  for (let i = 0; i < array.length; i++) {
    array[i] = value;
  }
}

// oddOrEven
// changes every numerical value in the given array to odd if odd and even if even

function oddOrEven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array[i] = 'even';
    } else {
      array[i] = 'odd';
    }
  }
}

// changeNextThreeToValue
// starting with given index, change three consecutive values in the given array
//to the given value. Note the order of our 3 parameters, and check the test if you're unsure

function changeNextThreeToValue(start, array, value) {
  for (let i =0; i < array.length; i ++) {
    if (i === start || i === start+ 1|| i === start+ 2) {
      array[i] = value;
    }
  }
  return array;
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
