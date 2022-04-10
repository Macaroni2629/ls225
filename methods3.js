// Utility methods. These should work with either syntax (i.e. _.isElement(ob) or _(obj).isElement()).

// [optional, feel free to check out the video for the answer] isElement, return true if argument is a DOM element.
// isArray, return true if argument is an array.
// isObject, return true if argument is an object or a function.
// isFunction, return true if argument is a function.
// isString, return true if argument is a string.
// isNumber, return true if argument is a number. Also returns true for objects created with the Number constructor.
// isBoolean, return true if argument is a boolean. Also returns true for objects created with the Boolean constructor.
let joker = [1, 2, 3];
let notArray = "I am not an array; I am a string.";
let object = {z: "zebra"};
let function1 = function() {};
let function2 = () => {"hello"};

let boolean1 = true;
let notBoolean = "hello";

function isArray(element) {
  return Array.isArray(element)
  // note to self if on older browser that doesn't have this built in, do:
  // return toString.call(element) === "[object Array]"
}

function isObject(obj) {
  let type = typeof obj;

  return type === "function" || type === "object" && !!obj;
};

function isFunction(element) {
  let type = typeof element;
  return type === "function";
}

function isBoolean(element) {
  return toString.call(element) === "[object Boolean]";
}

function toString(element) {
  //Problem with recursively calling it here, otherwise it would be:
  // return toString.call(obj) === "[object String]"
}

function isNumber(element) {
  return typeof element === "number";
}

// console.log(isArray(joker)) // true
// console.log(isArray(notArray)) // false

// console.log(isObject(object)) // true
// console.log(isObject(function1)) // true
// console.log(isObject(function2)) // true

// console.log(isFunction(function1)) // true
// console.log(isFunction(function2)) // true

// console.log(isBoolean(boolean1)); // true
// console.log(isBoolean(notBoolean)); // false

// console.log(toString("hello")); // true
// console.log(toString(false)); // false

console.log(isNumber(8)); // true
console.log(isNumber(false)); // false