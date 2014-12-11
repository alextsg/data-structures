var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.counter = 0;

  // Implement the methods below
  return someInstance;

};

var stackMethods = {};

stackMethods.size = function(){
  return this.counter;
};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter = this.counter + 1;
};

stackMethods.pop = function(){
  if(this.counter > 0){
    this.counter--;
    var value = this.storage[this.counter];
    delete this.storage[this.counter];
    return value;
  }
};

