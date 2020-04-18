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

  list.addToTail = function(value) {
    //var node = Node(value)
    var node = Node(value);
    list.head = list.head || node;
    //if (list.tail)
    if (list.tail) {
      //list.tail.next = node
      list.tail.next = node;
    }
    //list.tail = node
    list.tail = node;
  };

  list.removeHead = function() {
    // store value of current head node
    var head = list.head;
    // set new head node
    list.head = list.head.next;
    // return removed value
    return head.value;
  };

  list.contains = function(target) {
    //set currentNode to equal list.head
    var current = list.head;
    //while loop to iterate through list while currentNode exists (isn't null)
    while (current) {
      //if currentNode.value === target
      if (current.value === target) {
      //return true
        return true;
      }
      //set currentNode to currentNode.next
      current = current.next;
    }
    //return false
    return false;
  };

  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
