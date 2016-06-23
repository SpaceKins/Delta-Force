var EventEmitter = require('events');
var util=require('util');

module.exports=Timer;

var count=0;

function Timer(){
  EventEmitter.call(this);
 var self=this;  // !!! This _this is important 
                  //  since it is being used in an annoymous funtion
 var i=0;

  setInterval(function tickHandler(){
    self.emit('tick', {interval: i++ });
    
  },1000);
}

util.inherits(Timer,EventEmitter);