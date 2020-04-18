var Set = function() {
  // set constructor
  var set = Object.create(setMethods);
  // set storage object
  set._storage = {};
  return set;
};

// Set methods
var setMethods = {
  // add any string and add to set
  add: function(item) {
    // if given item is NOT already in set
    // add this item to set storage
    this._storage[item] = null; //item?
    // and increase the sets length
  },

  // takes any string and returns a boolean reflecting whether it can be found in the set
  contains: function(item) {
    // object prototype method hasOwnProperty does exactly what we want here!
    return this._storage.hasOwnProperty(item);
  },

  // takes any string and removes it from the set if present
  remove: function(item) {
    // if given item is in set
    // delete item from storage
    // and reduce the sets length
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(1)
 contains: O(1)
 remove:  0(1)
 */
