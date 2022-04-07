// let props = {a: 'hello', b: 'bye'}

// for (let prop in props) {
//   console.log(prop);
// }


// findWhere: function(props) { //props is the 1 object passed in
//   let match;

//   element.some(function(obj) { //element is array of obj
//     let all_match = true;

//     for (let prop in props) { // props is the 1 obj passed in
//       if (!(prop in obj) || obj[prop] !== props[prop] ) {
//         all_match = false;
//       }
//     }

//     if (all_match) {
//       match = obj;
//       return true;
//     }
//   })

//   return match;
// },

// Problem: Given a function that takes an array of objects that returns another function that takes an object containing key value pairs `arr`, find the first object that matches the object `arr`.

// Examples:

// let dict = [{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }
// return _(dict).findWhere({ foo: "bar" }).idx === 0
// expect(typeof _().findWhere).toBe("function")


// data structure: input: array of objects, and an Object containing key value pairs
// output: one object

//Algorithm:
//Define function `hello` that takes parameter `arrayOfObjects`.
// return a function that takes another argument called `objectWithProperties`

//Iterate through `arrayOfObjects`.  Check if ANY of them have the key value pairs that match the given object.

//Once you find the first one that matches, return it.

function hello(arrayOfObjects) {
  let match = false;
  return function(objectWithProperties) {
    arrayOfObjects.some((object) => {
      let all_match = true;
      for (let prop in objectWithProperties) {
        if (!(prop in objectWithProperties) || (object[prop] !== objectWithProperties[prop])){
          all_match = false;
        }
      }

      if (all_match) {
        match = object;
        return true;
      }
    });

    return match;
  }
}

console.log(hello([{a: 'hi', idx: 0}])({a: "hi"}).idx) // 0
console.log(hello([{a: 'hi', idx: 0}])({b: "hi"}).idx) // undefined
