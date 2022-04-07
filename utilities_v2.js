const { expect } = require("@jest/globals");

(function() {
  var findObjs = function(element, props, multiple) {
    var match = multiple ? [] : undefined;

    element.some(function(obj) {
      var all_match = true;

      for (var prop in props) {
        if(!(prop in obj) || obj[prop] !== props[prop]) {
          all_match = false;
        }
      }

      if (all_match) {
          if (multiple) {
            match.push(obj);
          } else {
            match = obj;
            return true;
          }
      }
    })

    return match;
  };

  var _ = function(element) {
    var u = {
      last: function() {
        return element[element.length - 1];
      },
      first: function() {
        return element[0];
      },
      without: function() {
        let new_arr = [];
        let args = Array.prototype.slice.call(arguments);
        
        element.forEach(function(el) {
          if (args.indexOf(el) === -1) {
            new_arr.push(el);
          }
        });
        
        return new_arr;
      },
      lastIndexOf: function(search) {
        let idx = -1;
        
        for (let i = element.length - 1; i >= 0; i--) {
          if (element[i] === search) {
            idx = i;
            break;
          }
        }

        return idx;
      },
      sample: function(qty) {
        let sampled = [];
        let copy = element.slice();
        let get = function() {
          let idx = Math.floor(Math.random() * copy.length);
          let el = copy[idx];

          copy.splice(idx, 1);
          return el;
        };
        
        if (!qty) {return get();}
        while(qty) {
          sampled.push(get());
          qty--;
        }

        return sampled;
      },
      // findWhere: function(props) {
      //   return findObjs(element, props, false);
      // },
      // where: function(props) {
      //   return findObjs(element, props, true);
      // },
      pluck: function(query) {
        let vals = [];
        element.forEach(function(obj) {
          if (obj[query]) {
            vals.push(obj[query]);
          }
        })
        return vals;
      },
      keys: function() {
        let keys = [];

        for (let prop in element) {
          keys.push(prop);
        }

        return keys;
      },
      values: function() {
        let vals = [];

        for (let prop in element) {
          vals.push(element[prop]);
        }

        return vals;
      },
      pick: function() {
        let args = [].slice.call(arguments);
        let new_obj = {};

        args.forEach(function(prop) {
          if (prop in element) {
            new_obj[prop] = element[prop];
          }
        });

        return new_obj;
      }
    };

    return u;
  };

  _.range = function(start, stop) {
    let range = [];
    if (stop === undefined) {
      stop = start;
      start = 0;
    }

    for (let i = start; i < stop; i++) {
      range.push(i);
    }

    return range;
  }

  _.extend = function() {
    let args = [].slice.call(arguments);
    let old_obj = args.pop();
    let new_obj = args[args.length - 1];

    for (let prop in old_obj) {
      new_obj[prop] = old_obj[prop];
    }

    return args.length === 1 ? new_obj : _.extend.apply(_, args);
  }
 
  module.exports = _;
})();