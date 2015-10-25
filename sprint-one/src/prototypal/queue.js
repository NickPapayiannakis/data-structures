var Queue = function() {
  var someInstance = Object.create(Queue.prototype);
  someInstance.front = 0;
  someInstance.back = 0;
  someInstance.storage = {};

  return someInstance;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function () {
  var result = this.storage[this.front];
  delete this.storage[this.front];

  if (this.front < this.back) {
    this.front++;

    return result;
  }

};

Queue.prototype.size = function() {
  return this.back - this.front;
};
