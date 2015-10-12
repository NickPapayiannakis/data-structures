var LinkedList = function(){
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode =  Node(value);

    if (list.head === null) {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var storeHead = list.head;
    list.head = list.tail;
    return storeHead.value;
  };

  list.contains = function(target, next){
    if (next === undefined) {
      next = list.tail;
    }

    if(list.head.value === target || next.value === target){
      return true;

    } else if (next.next === null) {
      return false;

    } else {
      list.contains(target, next);
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

