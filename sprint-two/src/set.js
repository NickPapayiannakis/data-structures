var Set = function() {
  var set = Object.create(Set.prototype);
  set._storage = {};
  return set;
};

Set.prototype.add = function(item) {
  this._storage[item] = item;
};

Set.prototype.contains = function(item) {
    return _.contains(this._storage, item);
};

Set.prototype.remove = function(item) {
  var result = this._storage[item];

  delete this._storage[item];
  return result;
};