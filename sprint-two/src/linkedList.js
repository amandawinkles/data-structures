var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //var currentNode;

  list.addToTail = function(value) {
    //var node = Node(value)
    //if (list.tail)
      //list.tail.next = node
    //else
      //list.head = node
      //list.tail = node
  };

  list.removeHead = function() {
    //if tail doesn't exist, return null
    //set current node to list.head
    //set currentNode.next to list.head, changing pointer/connections to delete head
    //return list.head.value
  };

  list.contains = function(target) {
    //set currentNode to equal list.head
    //while loop to iterate through list while currentNode exists (isn't null)
      //if currentNode.value === target
        //return true
      //set currentNode to currentNode.next
    //return false
  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
