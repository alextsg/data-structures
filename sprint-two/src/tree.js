var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree,treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  var result = false;
  var drillDown = function(node){
    if(node.value === target){
      result = true;
    } else if(node.children.length > 0){
      _.each(node.children, function(value){
        drillDown(value);
      });
    }
  };
  drillDown(this);
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
