var EventEmitter= require('events');
var util=require('util');

module.exports = BasicTimer;

function BasicTimer(maxTime, maxLagTime){

  var _this=this;
  var intervalId;
  var count=0;

  maxTime=(!maxTime)?10:maxTime;
  maxLagTime=(!maxLagTime)?20:maxLagTime;

  _this.startTime=0;
  _this.stopTime=0;

  intervalId=setInterval(function(){      
  _this.actualTimeNow  = new Date();
    if(count==maxTime){
      //_this.completeTime= new Date();
      _this.emit('complete', "clock completed at " + _this.startTime.getTime() +'\n' + 'duration=' + (_this.stopTime.getTime()-_this.startTime.getTime())); 
      clearInterval(intervalId);
    }
    else
    {
      console.log('tick tock ' + count++);
    }    

if(_this.startTime!=0){
    var duration=(_this.actualTimeNow.getTime() - _this.startTime.getTime());
   // console.log('Actual Time=' + _this.actualTimeNow.getTime() +  'StartTime=' + _this.startTime.getTime() );
    console.log('Duration =' + duration);

    var lagTime=duration % 1000;
    if(lagTime>maxLagTime)
    {
      _this.emit('lag',lagTime);
      //console.log('maxLagTime=' + maxLagTime + ' This Lag Time=' + lagTime);
    }
  }
  },1000);
  
  _this.startTimer =function(){
    _this.startTime = new Date();
    _this.emit('start', "clock started at " + _this.startTime.getTime());
  } 

_this.stopTimer =function(){
    // clearInterval(intervalId);
    _this.stopTime= new Date();
    _this.emit('stop', "clock stopped at " + _this.startTime.getTime() +'\n' + 'duration=' + (_this.stopTime.getTime()-_this.startTime.getTime()));
  } 

  _this.getIntervalId= function(){
    return intervalId;
  }
}


util.inherits(BasicTimer, EventEmitter);