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
  //Fails test starting line 22.
  list.contains = function(target){
    if(this.head.value === target){
      return true;
    }
    if(this.tail.next){
      list.contains(this.tail.next);
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
