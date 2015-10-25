var Stack = function() {
  var someInstance = {};
  var count = 0;
  var storage = {};

  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count === 0) {
      return 0;
    }

    count--;
    return storage[count];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
