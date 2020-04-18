//prototypal
var BinarySearchTree = function(value) {
  // define tree with prototype instantiation
  var tree = Object.create(binarySearchTreeMethods);
  // define tree value
  tree.value = value;
  // define left and right property
  tree.left = null;
  tree.right = null;

  // return tree
  return tree;
};

// define binary search tree methods
var binarySearchTreeMethods = {

  // insert method, accepts a value and places it in the tree in the correct position
  insert(value) {
    // define current BST child
    var child = BinarySearchTree(value);
    // recurse through BST
    // if current value is less than current tree value
    if (value < this.value) {
      // and the left node is empty
      if (this.left === null) {
      // left tree node becomes child tree
        this.left = child;
      // otherwise
      } else {
      // set the left node as the child value
        this.left.insert(child.value);
      }
    // otherwise
    // if current value is greater than current tree value
    } else if (value > this.value) {
      // and right node is empty
      if (this.right === null) {
      // right tree node comes child tree
        this.right = child;
      // otherwise
      } else {
      // set the right node as the child value
        this.right.insert(child.value);
      }
    }
  },

  // contains method, accepts a value and returns a boolean reflecting whether or not the value is contained in the tree
  contains(target) {
  // if current value is equal to target value
    if (this.value === target) {
      // return true
      return true;
    }

    // if target is smaller than current value
    if (target < this.value) {
      // return boolean from checking if left tree contains target AND isn't null
      return this.left !== null && this.left.contains(target);
    // otherwise
    } else {
      // return boolean from checking if right tree contains target AND isn't null
      return this.right !== null && this.right.contains(target);
    }
  },

  // depth first log method, accepts a callback and executs it on every value contained in tree
  depthFirstLog(callBack) {
  // pass current tree value to callback function
    callBack(this.value);
    // set children of tree to iterate through
    var children = [this.left, this.right];
    // iterate through each child of children, applying callback function
    _.each(children, function(child) {
      child && child.depthFirstLog(callBack);
    });
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
  insert: O (log n)
  contains: O (log n)
  depthFirstLog: O (log n)
 */
