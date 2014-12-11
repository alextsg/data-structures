var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


  // Use an object with numeric keys to store values
  this.storage = {};
  this.counter = 0;



  // Implement the methods below
  //return someInstance;

};



Stack.prototype.size = function(){
  return this.counter;
};

Stack.prototype.push = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function(){
  if(this.counter > 0){
    this.counter--;
    var value = this.storage[this.counter];
    delete this.storage[this.counter];
    return value;
  }
};




