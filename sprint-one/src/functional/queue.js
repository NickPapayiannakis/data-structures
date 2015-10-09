/*var Queue = function(){
  var someInstance = {};
  var storage = {};
  // Use an object with numeric keys to store values
  
  var end = 0; // 
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[start] = value;
    end++;
  };

  someInstance.dequeue = function(){
    if(start === 0){
      return 0;
    }
    var value = storage[end];
    end--;
    start++; // does not account for dequeing

    return storage[start - 1];
  };
  someInstance.size = function(){
    return end;
  };

  return someInstance;
};*/



    /*var result = storage[0];
    // delete storage[0];

    for( var i = 0; i < count; i++){
      storage[i] = storage[i+1];
     }*/
    //return result;



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







