// the project is write a module of utility functions
// findWhere, return the first object with properties that match the supplied object. If no objects match all the supplied properties, undefined is returned.

// let dict = [{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }];
// return _(dict).findWhere({ foo: "bar" }).idx === 0
// expect(typeof _().findWhere).toBe("function")
//return _(dict).findWhere({ foo: "bar", quux: "z" }).idx === 2;

// hello([{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }], { foo: "bar" }) === 0
// 
// hello([{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }], { foo: "bar", quux: "z" }) === 2

//test("findWhere returns undefined with no matched properties", function() {
  //     return _(dict).findWhere({ foo: "quux" }) === undefined;

//notes to self element is an array of objects
// an object with properties

//

/* Examples
_([{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }]).findWhere({ foo: "bar" }.idx) === 0;
we input an array of objects that have properties foo and idx.  then for that return value, we invoke `findWhere` and pass in 

input: findWhere has access to an array of objects with foo and idx properties and an object.
output: 

_([{ foo: "bar", quux: "q", idx: 0 }, { foo: "baz", quux: "z", idx: 1 }, { foo: "bar", quux: "z", idx: 2 }].findWhere({ foo: "bar", quux: "z" }.idx)) === 2;

findWhere has access to an array of objects with foo and idx and quux properties and an object
output is: after checking `idx` property returns 2 because that's the value of the `idx` property of the object that has those properties.

_([{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }].findWhere({ foo: "quux" })) === undefined;

findWhere has access to an array of objects with properties foo, idx..

output is: the FIRST object that has all the matched properties, or undefined

generalized data input/output:
// input: array of objects, and an object with properties that you want to find

// output: the object that has all the matched properties or undefined if there's no match++.. r the value that's referenced by the `idx` property depending on what the question is asking

Initialize and declare `arrayOfMatches` to [];

Iterate through array of objects
Initialize and declare variable `allInThere` to true

  For each given object, iterate through its properties
    Using the `in` syntax, check if that property is found in the 2nd object
      If it is, keep going until the end
      If it's not, reassign `allInThere` to false
  
  Check value of `allInThere`
    if true,
      push object into `arrayOfMatches`
    If false,
      do nothing
      
  Check if `arrayOfMatches` has a length greater than 0.
    If it does, return the value at index 0.
    If it doesn't, return undefined.

*/

var _ = function(element) {
  var u = {
    findWhere: function(objWithProperties) {
      let arrayOfMatches = [];
      let allInThere;
      element.forEach((object) => {
        allInThere = true;
        for (let prop in object) {
          if (prop === "idx") {
            continue;
          } else if (!(prop in objWithProperties)) {
            allInThere = false;
          } else {
            if (object[prop] === objWithProperties[prop]) {
              continue;
            } else {
              allInThere = false;
            }
          }
        }

        if (allInThere) {
          arrayOfMatches.push(object);
        } 
      })
      if (arrayOfMatches.length > 0) {
        return arrayOfMatches[0];
      } else {
        return undefined;
      }
    },
  }

  return u;
};


console.log(_([{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }]).findWhere({ foo: "bar" }).idx === 0);
console.log(_([{ foo: "bar", quux: "q", idx: 0 }, { foo: "baz", quux: "z", idx: 1 }, { foo: "bar", quux: "z", idx: 2 }]).findWhere({ foo: "bar", quux: "z" }).idx === 2);
console.log(_([{ foo: "bar", idx: 0 }, { foo: "baz", idx: 1 }]).findWhere({ foo: "quux" }) === undefined);


const findWhere = function(element, item) {
  for (let idx = 0; idx < element.length; idx++) { // iterating over array of elements
    let allMatches = true;
    for (let key of Object.keys(item)) { // iterating over array of keys of `item`
      if (element[idx][key] !== item[key]) { // checks if array of objects at that index that key's value is the same as the given `item`'s one
        allMatches = false; // if the values aren't the same, assign false 
      }
    }
    if (allMatches) { // if this is true
      this.idx = idx; // assign idx property to `idx`
      return this; // return `this`
    }
  }

  return undefined; // else return `undefined`
};


//Anne

function where(element, obj) {
  return element.filter(ob => { // iterating over arrayOfObjects
    return Object.values(obj).every(val => { // get array of values and check that every value of that object
      return Object.values(ob).includes(val); // is included in the other one
    });
  });
}