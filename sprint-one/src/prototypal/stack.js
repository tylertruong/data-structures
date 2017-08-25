var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(Stack.prototype);
  someInstance.stackSize = 0;
  someInstance.storage = {};

  return someInstance;
};


Stack.prototype.push = function (value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
  return this.storage[this.stackSize - 1];
};

Stack.prototype.pop = function () {
  this.stackSize--;
  return this.storage[this.stackSize];
};

Stack.prototype.size = function() {
  if (this.stackSize < 0) {
    this.stackSize = 0;
  }
  return this.stackSize;
};



