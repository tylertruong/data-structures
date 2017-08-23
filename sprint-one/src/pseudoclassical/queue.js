var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
  this.firstItem = 0;
  this.lastItem = 0;
};

Queue.prototype.size = function () {
  if (this.stackSize < 0) {
    this.stackSize = 0;
  }
  return this.stackSize;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.firstItem] = value;
  this.firstItem++;
  this.stackSize++;
  return this.storage[this.firstItem - 1];
};

Queue.prototype.dequeue = function () {
  this.lastItem++;
  this.stackSize--;
  return this.storage[this.lastItem - 1];
};

