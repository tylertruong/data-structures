var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.stackSize = 0;
  someInstance.lastItem = 0;
  someInstance.firstItem = 0;
  someInstance.storage = {};



  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function (value) {
    this.stackSize++;
    var temp = this.firstItem;
    this.storage[temp] = value;
    this.firstItem++;
    return this.storage[temp]; 
  },
  dequeue: function () {
    this.stackSize--;
    var temp = this.lastItem;
    this.lastItem++;
    return this.storage[temp];
  },
  size: function () {
    if (this.stackSize < 0) {
      this.stackSize = 0;
    }
    return this.stackSize;
  } 
};


var extend = function(obj) {

  var preArgs = Array.prototype.slice.call(arguments);
  var args = preArgs.slice(1);
  _.each(args, function(item) {
    _.each(item, function(value, keys) {
      obj[keys] = value;
    });
  });
};
