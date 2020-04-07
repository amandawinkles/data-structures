var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.index = 0;
  newQueue.count = 0;
  newQueue.fifo = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
  this.count++;
}

queueMethods.dequeue = function() {
  if (this.count > 0) {
    this.count--;
  }
  var key = this.storage[this.fifo];
  this.fifo++;
  return key;
}

queueMethods.size = function() {
  return this.count;
}

