var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.stackSize = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function () {
    this.stackSize++;
  },
  dequeue: function () {
    this.stackSize--;
  },
  size: function () {
    if (this.stackSize < 0) {
      this.stackSize = 0;
    }
    return this.stackSize;
  }
};


