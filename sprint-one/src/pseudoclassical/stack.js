var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.newStack = {};
  this.newStack.storage = {};
  this.newStack.count = 0;
};

Stack.prototype.push = function(value) {
  this.newStack.storage[this.newStack.count] = value;
  this.newStack.count++;
}

Stack.prototype.pop = function() {
  if (this.newStack.count > 0) {
    this.newStack.count--;
  }
  return this.newStack.storage[this.newStack.count];
}

Stack.prototype.size = function() {
  return this.newStack.count;
}


