var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  //_.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) { //add target as a parameter?
  //set value to new child node? //var child = Tree(value)
  //push child node into this.children array
};

treeMethods.contains = function(target) {
  //_.contains(Tree, target)?

  //if current node value is equal to the target
    //return true
  //for loop to iterate through children
    //call treeMethods.contains on each child
  //return false
};



/*
 * Complexity: What is the time complexity of the above functions?
    //addChild: O(1)
    //contains: O(n)
 */
