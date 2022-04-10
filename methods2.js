

// findWhere, return the first object with properties that match the supplied object. If no objects match all the supplied properties, undefined is returned.
// where, return an array of all objects with properties that match the supplied object.
// pluck, return an array of the values that match the supplied key from a collection of objects.
// keys, return an array of the keys from an object.
// values, return an array of the values from an object.
// extend, takes two or more objects, taking the properties and values from the last argument and adding them to the argument before it. Object extensions occur recursively from last argument to first. The first argument ends up being modified to include all properties and values from the other objects passed in.
// pick, return a new object with the passed in properties taken from the old object. Accepts one or more arguments.
// omit, return a new object with any passed in properties omitted.
// has, return true when the property passed in exists, false if it doesn't.

let arrayOfObjects = [{quantity: 5}, {quantity: 3}, {total: 10, forever: 'abc'}];
let object = {quantity: 2, style: 4};
let arrayOfPeople = [{first_name: "Bill", last_name: "Gates"}, {first_name: "Bill", last_name: "Smith"}, { first_name: "Steve", last_name: "Jobs"}];

let old_object = {crayon: 'green', marker: 'blue', highlighter: 'yellow'};

function findWhere(arrayOfPeople, props) {
  var match;
  arrayOfPeople.some(function(obj) {
    var all_match = true;

    for (var prop in props) {
      if (!(prop in obj) || obj[prop] !== props[prop]) { // if property is not in person OR the values don't match up
        all_match = false;
      }
    }

    if (all_match) {
      match = obj;
      return true;
    }
  });

  return match;
}

function where(arrayOfPeople, props) {
  var arrayOfMatches = [];
  arrayOfPeople.forEach(function(obj) {
    var all_match = true;

    for (var prop in props) {
      if (!(prop in obj) || obj[prop] !== props[prop]) { // if property is not in person OR the values don't match up
        all_match = false;
      }
    }

    if (all_match) {
      arrayOfMatches.push(obj);
    }
  });

  return arrayOfMatches;
};

function pluck(array, property) {
  let vals = [];
  array.forEach(function(obj) {
    if (obj[property]) {
      vals.push(obj[property]);
    }
  })

  return vals;
}

function keys(arrayOfObjects) {
  return Object.keys(arrayOfObjects);
}

function values(arrayOfObjects) {
  return Object.values(arrayOfObjects);
}

let arrayOfObjects2 = [{quantity: 5}, {monkey: 3}, {total: 10, forever: 'abc'}, {carpenter: 1}];

function extend() {
  let args = [].slice.call(arguments)
  let old_obj = args.pop();
  let new_obj = args[args.length - 1];

  for (var prop in old_obj) {
    new_obj[prop] = old_obj[prop];
  }

  return args.length === 1 ? new_obj : extend(...args);
}

function pick(old_object, arrayOfProperties) {
  let new_obj = {}
  arrayOfProperties.forEach((property) => {
    if (property in old_object) {
      new_obj[property] = old_object[property];
    }
  })
  
  return new_obj;
}

function omit(old_object, arrayOfProperties) {
  let new_obj = {};
  Object.keys(old_object).forEach((property) => {
    if(arrayOfProperties.includes(property)) {
      return;
    } else {
      new_obj[property] = old_object[property];
    }
  })
  
  return new_obj;
}

let object3 = {cool: "hi"};
let object4 = {notCool: 'no'};

function has(obj, property) {
  return {}.hasOwnProperty.call(obj, property)
}



// console.log(findWhere(arrayOfPeople, {first_name: "Bill"})) // Bill Gates object
// console.log(findWhere(arrayOfPeople, {first_name: "Bill", last_name: "Gates"})) // Bill Gates object
// console.log(findWhere(arrayOfPeople, {first_name: "Joseph"})) // undefined
// console.log(where(arrayOfPeople, {first_name: "Bill"})) // Bill Gates object and Bill Smith object in an array together

// console.log(pluck(arrayOfObjects, "quantity")) // [5, 3]

// console.log(keys(object)) // array of keys
// console.log(values(object)) // array of values

// console.log(extend(...arrayOfObjects2)) // one object with all of properties merged

//console.log(pick(old_object, ["crayon", "marker"])) // a newobject with crayon and marker properties

// console.log(omit(old_object, ["crayon", "marker"])) // new object with crayon and marker properties omitted

 console.log(has(object3, "cool")) // true
 console.log(has(object4, "cool")) // false