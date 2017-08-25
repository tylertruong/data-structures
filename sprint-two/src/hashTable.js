

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index) || {};
  obj[k] = v;
  this._storage.set(index, obj);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index);
  return obj[k];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index);
  delete obj[k];
  this.insert(index, obj);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(n);
 retrieve = O(1);
 remote = O(1);
 */


