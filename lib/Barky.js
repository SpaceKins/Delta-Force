var EventEmitter= require('events');
var util=require('util');

module.exports = Barky;

function Barky(){

  var _this=this;
  var intervalId;
  var count=0;

  console.log("1. I'm waking up and starting to bark");


  intervalId=setInterval(function(){
    _this.emit('bark');
    console.log('Just Barked ' + count++);
  },1000);

_this.stopTimer =function(){
    clearInterval(intervalId);
  } 

  _this.getIntervalId= function(){
    return intervalId;
  }
}


util.inherits(Barky, EventEmitter);