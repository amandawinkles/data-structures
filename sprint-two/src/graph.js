

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //store value as node is added
  this.storage.node = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.storage, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //find node if exists & delete
  for (var i = 0; i < this.edges.length; i++) {
    //check if has edge
    if (_.contains(this.edges[i], node)) {
      return this.edges[i].pop();
    }
  }
  delete this.storage.node;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //loop through edges array
  for (var i = 0; i < this.edges.length; i++) {
    //check if has edge
    if ((_.contains(this.edges[i], fromNode)) && (_.contains(this.edges[i], toNode))) {
      //return call _.contains on edge
      return true;
    }
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //this.storage.fromNode.push(toNode);
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //if fromNode exists in edges array, remove fromNode/toNode array from edges
  for (var i = 0; i < this.edges.length; i++) {
    //check if has edge
    if ((_.contains(this.edges[i], fromNode)) && (_.contains(this.edges[i], toNode))) {
      return this.edges[i].pop();
    }
  }
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
