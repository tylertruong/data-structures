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
    storage[firstItem] = value;
    firstItem++;
    return storage[firstItem - 1];
  };

  someInstance.dequeue = function() {
    size--;
    lastItem++;
    return storage[lastItem - 1];
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};
