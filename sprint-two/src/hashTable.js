

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // define bucket
  var bucket = this._storage.get(index);
  // if bucket does not exist
  if (!bucket) {
    // define tuple as an array [k, v]
    var tuple = [k, v];
    // set bucket to equal tuple
    bucket = tuple;
    // use set method to set index and bucket into storage
    this._storage.set(index, bucket);
    // return
  }
  // define found variable
  var found = false;
  // if bucket found, update found to true

  // iterate through bucket
  for (var i = 0; i < bucket.length; i++) {
    // redefine tuple as bucket at i
    var tuple = bucket[i];
    // if tuple[0] is equal to k
    if (tuple[0] === k) {
      // tuple[1] = v
      tuple[1] = v;
      // found becomes true
      found = true;
      // break? only first instance or all in hash?
      break;
    }
    // if not found push tuple into bucket
    if (!found) {
      bucket.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // define bucket
  var bucket = this._storage.get(index);
  // use map to return tuple values (address: tuple[0], value: tuple[1])
  // if bucket doesnt exist
  if (!bucket) {
    // return null
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    // redefine tuple as bucket at i
    var tuple = bucket[i];
    // if tuple[0] is equal to k
    if (tuple[0] === k) {
      // tuple[1] = v
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // define bucket
  var bucket = this._storage.get(index);
  // if bucket doesnt exist
  if (!bucket) {
    // return null
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    // redefine tuple as bucket at i
    var tuple = bucket[i];
    // if tuple[0] is equal to k
    if (tuple[0] === k) {
      //splice value from bucket
      tuple.pop();
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


