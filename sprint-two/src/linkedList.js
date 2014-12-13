var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){

    if(this.head === null){

      //this.head = Node(value);
      this.tail = this.head = Node(value);
    }else{
      //this.tail.next = Node(value);
      this.tail = this.tail.next = Node(value);
    }
  };

  list.removeHead = function(){
    var temp  = this.head;
    this.head = this.head.next;
    return temp.value;
  };

  list.contains = function(target){
    var result = false;
    var drillDown = function(node){
      if(node.value === target){
        result = true;
      }else if(node.next){
        drillDown(node.next);
      }
    };
    drillDown(this.head);
    return result;
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
