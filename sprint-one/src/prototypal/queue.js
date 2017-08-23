var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.stackSize = 0;
  someInstance.storage = {};
  someInstance.firstItem = 0;
  someInstance.lastItem = 0;

  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.stackSize++;
    this.storage[this.firstItem] = value;
    this.firstItem++;
    return this.storage[this.firstItem - 1];
  },
  dequeue: function () {
    this.stackSize--;
    this.lastItem++;
    return this.storage[this.lastItem - 1];
  },
  size: function () {
    if (this.stackSize < 0) {
      this.stackSize = 0;
    }
    return this.stackSize;
  }
};


