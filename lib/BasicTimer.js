var EventEmitter= require('events');
var util=require('util');

module.exports = BasicTimer;

function BasicTimer(maxTime, maxLagTime){

  var _this=this;
  var intervalId;


  intervalId=setInterval(function(){      
   _this.emit('tick') ;

  },1000);



}


util.inherits(BasicTimer, EventEmitter);