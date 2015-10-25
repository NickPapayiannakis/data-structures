var Queue = function() {

  var someInstance = {};
  var front = 0;
  var back = 0;
  var storage = {};

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
   var result = storage[front];
   delete storage[front];

   if (front < back) {
    front++;
   }
   
   return result;
  };

  someInstance.size = function() {
    return back - front;
  };

  return someInstance;
};