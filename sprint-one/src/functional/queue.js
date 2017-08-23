var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var lastItem = 0;
  var firstItem = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    var temp = firstItem;
    storage[temp] = value;
    firstItem++;
    return storage[temp];
  };

  someInstance.dequeue = function() {
    size--;
    var temp = lastItem;
    lastItem++;
    return storage[temp];
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
