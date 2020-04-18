class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  insert(value) {
    //define current variable & set to this
    var current = this;
    //if this.root exists, set current to equal this.root
    if (this.root) {
      current = this.root;
    }
    //if current.value is greater than value
    if (current.value > value) {
      //if current.left doesn't exist,
      if (!current.left) {
        //set current.left to equal new Node instance w/value
        current.left = new Node(value);
        //this.count++
        this.count++;
        //return?
      }
      //if current.left exists, set current.left as this object and call this.insert w/value as second parameter to recurse
      if (current.left) {
        this.insert.call(current.left, value);
      }
      //return current
      return current;
    }
    //if current.value is less than value
    if (current.value < value) {
      //if current.right doesn't exist
      if (!current.right) {
        //set current.right to equal a new Node instance w/value passed in
        current.right = new Node(value);
        //update count
        this.count++;
        //return?
      }
      //if current.right exists,
      if (current.right) {
        //set current.right as this object and call this.insert w/value as second argument
        this.insert.call(current.right, value);
      }
    }
  };

  contains(value) {
    //define current & set to this
    var current = this;
    //if this.root exists, set current to root
    if (this.root) {
      current = this.root;
    }
    //iterate through tree w/while as long as current exists/not undefined
    while (current) {
      //if value equals === current.value, check target value existence
      if (value === current.value) {
        return true;
      }
      //if target value is less than current.value, check left
      if (value < current.value) {
        current = current.left;
      }
      //if value is more, check right
      if (value > current.value) {
        current = current.right;
      }
    }
    //if not found, return false
    return false;
  };

  depthFirstLog(cb) {
    //create inner function & pass in node
      //check if nodes aren't null, then recurse each node, node.left, node.right, this.root
    var recurseNodes = function(node) {
      if (node.left !== null) {
        recurseNodes(node.left);
      }
      if (node.right !== null) {
        recurseNodes(node.right);
      }
      //call callback w/this, then node.value as argument
      cb.call(this, node.value);
    }
    recurseNodes(this.root);
  }
};

var bst = new BinarySearchTree(5);
bst.insert(9);
bst.insert(3);


/*
 * Complexity: What is the time complexity of the above functions?
 */
