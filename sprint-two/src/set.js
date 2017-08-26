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
    if (Array.isArray(item) && Array.isArray(this._storage[i]) && compareArrays(item, this._storage[i])) {
      return true;
    } else if (typeof item === 'object' && typeof this._storage[i] === 'object' && compareObjects(item, this._storage[i])) {
      return true;
    } else {
      if (this._storage[i] === item) {
        return true;
      }
    }
  }
  return false;
};

Set.prototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (Array.isArray(item) && Array.isArray(this._storage[i]) && compareArrays(item, this._storage[i])) {
      this._storage.splice(i, 1);
    } else if (typeof item === 'object' && typeof this._storage[i] === 'object' && compareObjects(item, this._storage[i])) {
      this._storage.splice(i, 1);
    } else {
      if (this._storage[i] === item) {
        this._storage.splice(i, 1);
      }
    }
  }
  return false;
//   this._storage.splice(this._storage.indexOf(item), 1);
};





var compareArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

var compareObjects = function(obj1, obj2) {
  if (JSON.stringify(obj1).length === JSON.stringify(obj2).length) {
    for (var key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
      return true;
    }
  } 
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 add: O(1);
 contains O(n);
 remove: O(n);
 */
