//pseudoclassical
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.resize = function(newSize) {
  var originalStorage = this._storage;
  var tuples = [];
  //loop through storage
  console.log(this.resizeStorage);
  for (var i = 0; i < originalStorage.length; i++) {
    //if no storage bucket exists at index, return
    var bucket = originalStorage[i];
    if (!bucket) {
      continue;
    }
    //else loop through buckets at each index
    for (var j = 0; j < bucket.length; j++) {
      //tuple equals bucket[j]
      var tuple = bucket[j];
      if (!tuple) {
        continue;
      }
      tuples.push(tuple);
    }
  }
  this._limit = newSize;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
  for (var k = 0; k < tuples.length; k++) {
    //call insert w/tuples, providing each key + value
    this.insert(tuples[k][0], tuples[k][1]);
  }
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
      //break;
    }
  }
  // if not found push tuple into bucket
  if (!found) {
    bucket.push([k, v]);
    this.size++;
    //resize when more than 3/4 full
    if (this.size > this._limit * .75) {
      this.resize(this._limit * 2);
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
    return undefined;
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
      this.size--;
      //resize if less than 1/4
      if (this.size < this._limit * .25) {
        this.resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
};

var myHash = new HashTable();
myHash.insert('seeds', 2);
console.log(myHash);


/*
 * Complexity: What is the time complexity of the above functions?
  insert: average: O(1)
  retrieve: average: O(1)
  remove: average: O(1)
 */

 /*
//create tuples array
var tuples = [];
//loop through storage
console.log(this.resizeStorage);
for (var i = 0; i < this.resizeStorage.length; i++) {
  //if storage is empty, continue
  if (!this.resizeStorage[i]) {
    continue;
  }
  //else loop through buckets at each index
  for (var j = 0; j < this.resizeStorage[i].length; j++) {
    //if bucket is empty, continue
    if (!this.resizeStorage[i][j]) {
      continue;
    }
    //else push tuples into tuples array
    tuples.push(this.resizeStorage[i][j]);
  }
}
console.log(tuples);
//set this._limit to new size;
//this._limit =
// //reset this._storage to an empty array
// this.resizeStorage = [];
// //reset this.size to 0
// this.size = 0;
//loop through tuples array
for (var k = 0; k < tuples.length; k++) {
  //call insert w/tuples, providing each key + value
  HashTable.prototype.insert(tuples[k][0], tuples[k][1]);
}
*/