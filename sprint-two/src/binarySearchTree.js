var BinarySearchTree = function(value) {

  var someInstance = Object.create(binarySearchMethods);

  someInstance.value = value;

  return someInstance;
};


binarySearchMethods = {};

binarySearchMethods.insert = function (value) {

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

binarySearchMethods.contains = function (value) {

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
 

binarySearchMethods.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  } 

  if (this.right) {
    this.right.depthFirstLog(callback);
  }
  
};

//var binaryTreeNode = 
/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log(n));
 contains: 0(log(n));
 depthFirstLog: 0(n);
 */
