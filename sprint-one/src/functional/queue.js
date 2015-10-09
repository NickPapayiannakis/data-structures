  var Queue = function(){

  var someInstance = {};
  var front = 0;
  var back = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function(){
   var result = storage[front];
   delete storage[front];

   if (front < back){
    front++;
   }
   return result;
  };

  someInstance.size = function(){
    return back - front;
    
  };
  return someInstance;
};