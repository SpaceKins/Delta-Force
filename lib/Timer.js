var EventEmitter= require('events');
var util=require('util');

module.exports = Timer;

function Timer(){
  var _this=this;

  function start(){
      setInterval(function(){
    _this.emit('tick');
  },1000)
  }

}


util.inherits(Timer, EventEmitter);