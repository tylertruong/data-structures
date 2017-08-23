var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.stackSize = 0;

  return someInstance;
};

var stackMethods = {
  push: function () {
    this.stackSize++;
  },
  pop: function () {
    this.stackSize--;
  }, 
  size: function() {
    if (this.stackSize < 0) {
      this.stackSize = 0;
    }
    return this.stackSize;
  }
};


