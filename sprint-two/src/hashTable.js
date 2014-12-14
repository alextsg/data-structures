var HashTable = function(){
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  this._counter++;
  if(this._counter > 0.75*this._limit){
    this.resize(this._limit * 2);
  }

  var i = getIndexBelowMaxForKey(k, this._limit);

  if (!this._storage.get(i)){
    var newBucket = [];
    newBucket.push([k,v]);
    this._storage.set(i,newBucket);
    return;
  }else{
    var bucket = this._storage.get(i);
    for(var j = 0; j < bucket.length; j++){
      if(bucket[j][0] === k){
        bucket[j][1] = v;
        return;
      }
    }
    bucket.push([k,v]);



  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result = null;
  var bucket = this._storage.get(i);
  if(!bucket){
    return null;
  }else{
    var bucketSize = bucket.length;
    for(var j = 0;j < bucketSize; j++){
      if(bucket[j][0] === k){
        result = bucket[j][1];
      }
    }
  }
  return result;
};

HashTable.prototype.remove = function(k){
  this._counter--;
  if(this._counter < 0.25*this._limit && this._limit > 8){
    this.resize(this._limit / 2);
  }


var i = getIndexBelowMaxForKey(k, this._limit);
  var result = null;
  var bucket = this._storage.get(i);

  if(!bucket){
    return null;
  }else{
    var bucketSize = bucket.length;
    for(var j = 0;j < bucketSize; j++){
      var tuple = bucket[j];
      if(tuple[0] === k){
        bucket.splice(j,1);
        return tuple[1];
      }
    }
  }
  return result;
};

HashTable.prototype.resize = function(newLimit){
  this._counter = 0;
  var temp = this._storage;
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);


  //for(var i = 0;i < temp.length; i++){
  this._storage.each(function(bucket, index){
    for(var j = 0;j < bucket.length;j++){
      this.insert(temp[i][j],temp[i][j+1]);
    }
  });



};




/*
 * Complexity: What is the time complexity of the above functions?
 */
