var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail) {
      list.head = list.tail;
      list.tail = Node(value);
    } else {
      list.tail = Node(value);
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      var temp = list.head.value;
      list.head = list.tail;
      return temp;
    }
  };

  list.contains = function(target) {
    for (var key in list) {
      if (list[key]['value'] === target) {
        return true;
      }
    } return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
