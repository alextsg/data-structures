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
    if(BST.value === value){
      return null;
    }else if(value > BST.value){
      if(BST.right === null){
        BST.right = BinarySearchTree(value);
      } else {
        drillDown(BST.right);
      }
    }else{
      if(BST.left === null){
        BST.left = BinarySearchTree(value);
      } else {
        drillDown(BST.left);
      }
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
    };
    if (BST.right){
      drillDown(BST.right);
    }
  };
  drillDown(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
