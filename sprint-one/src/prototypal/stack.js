var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--;
  }
  return this.storage[this.count];
}

stackMethods.size = function() {
  return this.count;
}
