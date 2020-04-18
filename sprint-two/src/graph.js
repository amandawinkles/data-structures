// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //store value as node is added
  this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage[node] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // iterate over each node
  for (var key in this.storage) {
    // if current keyNode has removed Node present in edge list
    if (this.storage[key][node]) {
      // delete the edge list
      delete this.storage[key][node];
    }
  }
  // delete the node
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode][toNode] ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //this.storage.fromNode.push(toNode);
  // this.edges.push([fromNode, toNode]);
  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key]);
  }
};
// for each item in storage
  // perform callback function

/*
* Complexity: What is the time complexity of the above functions?
addNode: O(1)
contains: O(n)
removeNode: O(n)
hasEdge: O(1)
addEdge: O(1)
forEachNode: O(n)
*/

  // instance storage
  // example Adjacency List
  // this.storage = {
  //   1: [2,5]
  //   2: [1]
  //   3: []
  //   4: []
  //   5: [1]
  // };
