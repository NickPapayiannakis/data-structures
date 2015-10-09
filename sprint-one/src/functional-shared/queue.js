var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.back] = value;
    this.back++;
  },
  dequeue: function(){
    var result = this.storage[this.front];
    delete this.storage[this.front];

   if (this.front < this.back){
    this.front++;
   }
   return result;
  },
  size: function(){
    return this.back - this.front;
  }
};