// first, return the first element in an array.
// last, return the last element in an array.
// without, return a new array that does not contain the value passed to it.
// range, return an array of values starting at 0 when a single number is supplied. If two arguments are supplied, returns an array of values that start with the first argument and ends with the one number less than the second argument.
// lastIndexOf, return the last index of the supplied value.
// sample, return a single value from an array when no argument is supplied. Return an array of multiple, non-repeated elements when a quantity is supplied.

let array = [1, 2, 3, 4, 5];

function first(array) {
  return array[0];
};

function last(array) {
  return array[array.length - 1];
};

function without(array, valueToRemove) {
  let index = array.indexOf(valueToRemove);

  array.splice(index, 1);
  return array.slice();
};

function range(start, stop) {
  let rangeOfValues = [];
  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  for (let i = start; i < stop; i++) {
    rangeOfValues.push(i);
  }

  return rangeOfValues;
};

function lastIndexOf(array, search) {
  let idx = -1;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === search) {
      idx = i;
      break;
    }
  }

  return idx;
};

function sample(array, quantity) {
  let sampled = [];
  let copyArray = array.slice();

  let get = function() {
    let index = Math.floor(Math.random() * copyArray.length);
    let element = copyArray[index];
    copyArray.splice(index, 1);
    return element;
  };

  if(!quantity) { return get(); } //if no argument supplied return 1 random number

  while(quantity) {
    sampled.push(get());
    quantity--;
  }

  return sampled;
}


console.log(first(array)); // 1
console.log(last(array)); // 5
console.log(without(array, 3)); // [1, 2, 4, 5]
console.log(range(5, 10)); // [5, 6, 7, 8, 9]
console.log(range(6)) // [0, 1, 2, 3, 4, 5]
console.log(sample(array, 2)) // should return an array of random 2 numbers
console.log(sample(array)) // should return 1 random number