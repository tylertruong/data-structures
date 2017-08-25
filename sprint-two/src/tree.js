var Tree = function(value) {

  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var bool = false;

  if (this.value === target) {
    bool = true;
  }

  if (this.children && this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      bool = bool || this.children[i].contains(target);
    }
  } 
    
  return bool;
};




/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1);
 contains = O(n);
 */
