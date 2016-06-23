var EventEmitter= require('events');
var util=require('util');

module.exports = Dog;

function Dog(){

  var _this=this;
  var intervalId;
  var count=0;

  console.log("1. I'm waking up and ready to play");

_this.speak =function(){
  intervalId=setInterval(function(){
  _this.emit('bark');
  console.log('ruff!' + count++);
  },1000);
  } 

  _this.getIntervalId= function(){
    return intervalId;
  }

  _this.sit=function(){
    clearInterval(intervalId);
  }
}


util.inherits(Dog, EventEmitter);

//clearInterval(intervalId);