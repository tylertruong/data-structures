var Tree = function(value) {

  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var temp = Tree(value);
  temp.parent = this;
  this.children.push(temp);
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

treeMethods.traverse = function(callback) {
  var temp = callback(this);

  if (this.children && this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      return this.children[i].traverse(callback);
    }    
  }

  return temp;
};

treeMethods.removeFromParent = function(value) {
  var fn = function (node) {
    if (node.value === value) {
      return node;
    }
  };
  var thisNode = this.traverse(fn);
  thisNode.parent.children.splice(thisNode.parent.children[value], 1);
  thisNode.parent = null;

  return thisNode;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1);
 contains = O(n);
 */
