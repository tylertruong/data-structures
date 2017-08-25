var Set = function() {
  var set = Object.create(Set.prototype);
  set._storage = []; 
  return set;
};

Set.prototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

Set.prototype.contains = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

Set.prototype.remove = function(item) {
  this._storage.splice(this._storage.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(1);
 contains O(n);
 remove: O(n);
 */
