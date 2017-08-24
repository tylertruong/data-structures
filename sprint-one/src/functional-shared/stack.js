var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.stackSize = 0;
  _.extend (someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  pop: function() {
    this.stackSize--;
    return this.storage[this.stackSize];
  },
  push: function (value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
    return this.storage[this.stackSize - 1];
  },
  size: function () {
    if (this.stackSize < 0) {
      this.stackSize = 0;
    }
    return this.stackSize;
  }
};


