class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.newStack = {};
    this.newStack.storage = {};
    this.newStack.count = 0;
  }

  push(value) {
    this.newStack.storage[this.newStack.count] = value;
    this.newStack.count++;
  }

  pop() {
    if (this.newStack.count > 0) {
      this.newStack.count--;
    }
    return this.newStack.storage[this.newStack.count];
  }

  size() {
    return this.newStack.count;
  }
}