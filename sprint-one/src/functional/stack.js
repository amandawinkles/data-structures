var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

   //push(string) - Add a string to the top of the stack
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  //pop() - Remove and return the string on the top of the stack
  someInstance.pop = function(value) {
    count--;
    if (count < 0) {
      count = 0;
    }
    return storage[count];
    delete storage[count];
  };

  //size() - Return the number of items on the stack
  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
