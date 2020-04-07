class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.newQueue = {};
    this.newQueue.storage = {};
    this.newQueue.index = 0;
    this.newQueue.count = 0;
    this.newQueue.fifo = 0;
  }

  enqueue(value) {
    this.newQueue.storage[this.newQueue.index] = value;
    this.newQueue.index++;
    this.newQueue.count++;
  }

  dequeue() {
    if (this.newQueue.count > 0) {
      this.newQueue.count--;
    }
    var key = this.newQueue.storage[this.newQueue.fifo];
    this.newQueue.fifo++;
    return key;
  }

  size() {
    return this.newQueue.count;
  }
}
