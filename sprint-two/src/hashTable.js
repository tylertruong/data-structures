

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._entries = 0;
  this._tests = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index) || [];
  var present;
  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i] === k) {
      present = i;
    }
  } 

  if (present !== undefined) {
    arr[present] = k;
    arr[present + 1] = v;
  } else {
    arr = arr.concat(k, v);
  }

  this._storage.set(index, arr);

/*
  this._entries++;
  if(this._entries/this._limit >= .75) {
  
    this._storage.each(function (arr) {
     this._insert(arr);
    });
  
    this._limit *= 2;
  
    this._storage = LimitedArray(this._limit);
    for (var i = 0; i < this._tests.length; i++) {
      this._insert(this._tests[i][0], this._tests[i][1]);
    }
    this._tests = [];
  }
*/
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i] === k) {
      return arr[i + 1];
    }
  }
  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i] === k) {
      arr.splice(i, 2);
    }
  }
  this._storage.set(index, arr);
  this._entries--;


};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(n);
 retrieve = O(n);
 remove = O(n);
 */


