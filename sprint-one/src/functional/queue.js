var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var index = 0;
  var firstInFirstOut = 0;

  // Implement the methods below

  //enqueue(string) - Add a string to the back of the queue
  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
    count++;
  };

  //dequeue() - Remove and return the string at the front of the queue
  someInstance.dequeue = function() {
    if (count > 0) {
      count--;
    }
    var key = storage[firstInFirstOut];
    firstInFirstOut++;
    return key;
  };

  //size() - Return the number of items in the queue
  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
