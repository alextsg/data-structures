var BinarySearchTree = function(value){

  var newBST = Object.create(BSTMethods);

  newBST.value = value;
  newBST.right = null;
  newBST.left = null;

  return newBST;
};

var BSTMethods = {};

BSTMethods.insert = function(value){
  var drillDown = function(BST){
    if (BST.value === value){
      return null;
    } else if (value > BST.value){
      BST.right === null ? BST.right = BinarySearchTree(value) :
      drillDown(BST.right);
    } else {
      BST.left === null ? BST.left = BinarySearchTree(value) :
      drillDown(BST.left);
    }
  };
  drillDown(this);
};

BSTMethods.contains = function(value){
  var result = false;
  var drillDown = function(BST){
    if(BST.value === value){
      result = true;
    }else if(value > BST.value && BST.right){
      drillDown(BST.right);
    }else if(BST.left){
      drillDown(BST.left);
    }
  };
  drillDown(this);
  return result;
};

BSTMethods.depthFirstLog = function(func){
  var drillDown = function(BST){
    func(BST.value);
    if (BST.left){
      drillDown(BST.left);
    }
    if (BST.right){
      drillDown(BST.right);
    }
  };
  drillDown(this);
};

BSTMethods.breadthFirstLog = function(){

  var nodes = [];
  var results = [];
  nodes.push(this);
  var getPointers = function(BST){
    if(BST.left){
      nodes.push(BST.left);

    }
    if(BST.right){
      nodes.push(BST.right);
    }

    if(BST.left){
      getPointers(BST.left);
    }

    if(BST.right){
      getPointers(BST.right);
    }
  };

  getPointers(this);

  for(var i = 0; i < nodes.length; i++){
    results.push(nodes[i].value);
  }

  return results;

  // shove the parent into a queue
  // iterate through parent's children and shove them into the queue
  // start left and right recursion and shove children into queue
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
