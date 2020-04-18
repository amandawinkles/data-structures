var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  //_.extend(newTree, treeMethods)
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //set value to new child node? //var child = Tree(value)
  var child = Tree(value);
  //push child node into this.children array
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //if current node value is equal to the target
  if (this.value === target) {
    //return true
    return true;
  }
  return this.children.some(child => child.contains(target));
};



/*
 * Complexity: What is the time complexity of the above functions?
    addChild: O(1)
    contains: O(n)
 */
