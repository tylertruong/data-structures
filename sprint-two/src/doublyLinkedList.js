var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail) {
      list.tail.next = Node(value);
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    } else {
      list.tail = Node(value);
      list.head = list.tail;
    }
  };

  list.addToHead = function(value) {
    if (list.head) {
      list.head.previous = Node(value);
      list.head.previous.next = list.head;
      list.head = list.head.previous;
    } else {
      list.head = Node(value);
      list.tail = list.head;
    }
  };

  list.removeHead = function() {
    if (list.head === list.tail) {
      temp = list.head.value;
      list.head = null;
      list.tail = null;
      return temp;
    } else if (list.head) {
      var temp = list.head.value;
      list.head.next.previous = null;
      list.head = list.head.next;
      return temp;
    } 
  };

  list.removeTail = function() {
    if (list.head === list.tail) {
      temp = list.head.value;
      list.head = null;
      list.tail = null;
      return temp;
    } else if (list.tail) {
      var temp = list.tail.value;
      list.tail.previous.next = null;
      list.tail = list.tail.previous;
      return temp;
    } 
  };


  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail : O(1)
 removeHead: O(1)
 contains: O(n)
 */
