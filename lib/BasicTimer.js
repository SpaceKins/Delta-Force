var EventEmitter= require('events');
var util=require('util');

module.exports = BasicTimer;

function BasicTimer(){

  var _this=this;
  var intervalId;

  _this.tickCount=0;
  _this.duration;
  _this.deviationMax;

  _this.startTimer =function(maxTime, maxDeviation){
    _this.maxTime=maxTime?maxTime:10;
    _this.deviationMax=maxDeviation?maxDeviation:50;
    _this.startTime = new Date();
    _this.emit('start', _this.startTime.getTime());


    intervalId=setInterval(function(){      
         var thisTime=new Date();
         thisTime=thisTime.getTime();

         _this.emit('tick',_this.tickCount++) ;
         _this.passTimeLimit();
         _this.duration=thisTime-_this.startTime.getTime();
         _this.verifyDuration();
    },1000);

  }

  _this.stopTimer=function(){
    _this.stopTime= new Date();
    _this.emit('stop',_this.stopTime.getTime());    
    clearInterval(intervalId);
  } 


  _this.passTimeLimit=function(){
    if( _this.tickCount >= _this.maxTime ){
      console.log("Timer passed limit");
      _this.stopTimer();
      _this.emit('complete',_this.stopTime.getTime()-_this.startTime.getTime());
    }
  }

  _this.verifyDuration=function(){
    var durationDeviation=_this.duration % 1000;
    console.log('Deviation=' + durationDeviation);
    if( durationDeviation>= _this.deviationMax){
      _this.emit('lag',durationDeviation);
    }

  }



}


util.inherits(BasicTimer, EventEmitter);