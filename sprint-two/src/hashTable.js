var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[i] === undefined){
     this._storage[i] = [];
  }
  this._storage[i].push(k);
  this._storage[i].push(v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = null;
  for(var j = 0;j < this._storage[i].length; j = j + 2){
    if(this._storage[i][j] === k){
      result = this._storage[i][j+1];
    }
  }
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
    for(var j = 0;j < this._storage[i].length; j = j + 2){
    if(this._storage[i][j] === k){
      this._storage[i][j] = null;
      this._storage[i][j+1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
