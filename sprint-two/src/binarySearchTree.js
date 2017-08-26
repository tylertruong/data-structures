var BinarySearchTree = function(value) {

  var someInstance = Object.create(BinarySearchTree.prototype);

  someInstance.value = value;

  return someInstance;
};


BinarySearchTree.prototype.insert = function (value) {

  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value); 
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
 
};

BinarySearchTree.prototype.contains = function (value) {

  if (value < this.value) {
    if (this.left) {
      return this.left.contains(value);
    } else {
      return false;
    }
  } else if (value > this.value) {
    if (this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  } else {
    return true;
  }

};
 

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  } 

  if (this.right) {
    this.right.depthFirstLog(callback);
  }
  
};

BinarySearchTree.prototype.breadthFirstLog = function (callback) {
  var queue = [this];
  
  while (queue.length !== 0) {
    var tree = queue.pop();
    callback(tree.value);
    if (tree.left) {
      queue.unshift(tree.left);
    } 
    if (tree.right) {
      queue.unshift(tree.right);
    }
  }
};



//var binaryTreeNode = 
/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log(n));
 contains: 0(log(n));
 depthFirstLog: 0(n);
 */
