

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._entries = 0;
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


  this._entries++;
  if (this._entries / this._limit >= .75) {

    this._limit *= 2;
    var temp = LimitedArray(this._limit);
    var newLimit = this._limit;
    this._storage.each(function (storagei, i, storage) {
      if (storagei !== undefined) {
        for (var i = 0; i < storagei.length; i += 2) {
          var index = getIndexBelowMaxForKey(storagei[i], newLimit);
          var arr = temp.get(index) || [];
          arr = arr.concat(storagei[i], storagei[i + 1]);
          temp.set(index, arr);

        }
      }
    });
    this._storage = temp;
    this._entries = 0;
  }
  

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
  var arr = this._storage.get(index) || [];
  for (var i = 0; i < arr.length; i += 2) {
    if (arr[i] === k) {
      arr.splice(i, 2);
    }
  }
  this._storage.set(index, arr);

  this._entries--;
  if (this._entries / this._limit <= .25 && this._limit > 8) {

    this._limit *= .5;
    let temp = LimitedArray(this._limit);
    let newLimit = this._limit;
    this._storage.each(function (storagei, i, storage) {
      if (storagei !== undefined) {
        for (var i = 0; i < storagei.length; i += 2) {
          var index = getIndexBelowMaxForKey(storagei[i], newLimit);
          var arr = temp.get(index) || [];
          arr = arr.concat(storagei[i], storagei[i + 1]);
          temp.set(index, arr);

        }
      }
    });
    this._storage = temp;
    this._entries = 0;
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 insert = O(n);
 retrieve = O(n);
 remove = O(n);
 */


