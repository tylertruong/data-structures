var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
};


Stack.prototype = {
  size: function () {
    if (this.stackSize < 0) {
      this.stackSize = 0;
    }
    return this.stackSize;
  },
  push: function () {
    this.stackSize++;
  },
  pop: function () {
    this.stackSize--;
  }

};