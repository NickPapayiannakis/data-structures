var Tree = function(value) {
  var newTree = {};

  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  var isInTree = false;

  var checkTree = function(node) {
    if(node.value === target){
      isInTree = true;
    } else {
      _.each(node.children, function(item) {
        checkTree(item);
      });
    }
  };

  checkTree(this);
  return isInTree;
};