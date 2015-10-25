var BinarySearchTree = function(value, memo) {

  var tree = Object.create(BinarySearchTree.prototype);
  tree.left = null;
  tree.right = null;
  tree.value = value;

  return tree;

};

BinarySearchTree.prototype.insert = function(value) {
  if(value < this.value){
    if(this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if(target === this.value) {
    return true;
  }
  if(this.left !== null){
    if(this.left.contains(target)) {
      return true;
    }
  }

  if(this.right !== null){
    if(this.right.contains(target)) {
      return true;
    }
  }

  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  if (this.value !== null) {
    cb(this.value);
  }

  if (this.left !== null){
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null){
    this.right.depthFirstLog(cb);
  }

};