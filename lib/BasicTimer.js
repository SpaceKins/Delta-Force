var EventEmitter= require('events');
var util=require('util');

module.exports = BasicTimer;

function BasicTimer(maxTime, maxLagTime){

  var _this=this;
  var intervalId;

  _this.startTimer =function(){
    _this.startTime = new Date();
    _this.emit('start', _this.startTime.getTime());
      intervalId=setInterval(function(){      
   _this.emit('tick') ;

  },1000);

  }

  _this.stopTimer=function(){
    _this.stopTime= new Date();
    _this.emit('stop',_this.stopTime.getTime());    
    clearInterval(intervalId);
  } 




}


util.inherits(BasicTimer, EventEmitter);