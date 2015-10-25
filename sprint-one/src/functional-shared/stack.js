var Stack = function() {
  var someInstance = {};
  someInstance.count = 0;
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

  stackMethods.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  stackMethods.pop = function() {
    if (this.count > 0) {
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    }
  };

  stackMethods.size = function() {
    return this.count;
  };




