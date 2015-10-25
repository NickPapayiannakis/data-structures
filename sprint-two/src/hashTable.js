var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var matchFound = false;

  if (!bucket) {
    bucket = [];
    bucket.push([k,v]);
    this._storage.set(i, bucket);

  } else {
    for (var t = 0; t < bucket.length; t++) {
      if (bucket[t][0] === k) {
        bucket[t][1] = v;
        matchFound = true;
      }
    }
    if (!matchFound) {
      bucket.push([k,v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    return null;
  } else {
    for (var t = 0; t < bucket.length; t++) {
      if (bucket[t][0] === k) {
        return bucket[t][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (!bucket) {
    return null;
  } else {
    for (var t = 0; t < bucket.length; t++) {
      if (bucket[t][0] === k){
        bucket[t][1] = null;
      }
    }
  }

};