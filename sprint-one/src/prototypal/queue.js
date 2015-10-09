var Queue = function()  {
  var someInstance = Object.create(queueMethods);

  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};

  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.back] = value;
  this.back++;
};

queueMethods.dequeue = function (){
  var result = this.storage[this.front];
  delete this.storage[this.front];

  if (this.front < this.back) {
    this.front++;

  return result;
  }
 
};

queueMethods.size = function(){
  return this.back - this.front;
};
