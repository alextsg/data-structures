var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};


  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.last = 0;
  someInstance.first = 0;
  // Implement the methods below
/*
  someInstance.enqueue = queueMethods.enqueue;

  someInstance.dequeue = queueMethods.dequeue;

  someInstance.size = queueMethods.size;
*/
  _.extend(someInstance, queueMethods);
  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.last] = value;
  this.last++;
};

queueMethods.dequeue = function(){
  if(this.last - this.first > 0){
    var result = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return result;
  }
};

queueMethods.size = function(){
   return (this.last - this.first);
};



