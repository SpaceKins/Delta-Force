var BasicTimer=require('./lib/BasicTimer');

var thisTimer= new BasicTimer();
var count=0;

thisTimer.on('tick',function(tickCount){console.log('tick-tock ' + tickCount ); });  //+ JSON.stringify(thisTimer.getIntervalId())
thisTimer.on('start',function(startTime){console.log('Start at ' + startTime);});
thisTimer.on('stop',function(stopTime){console.log('Stopped at ' + stopTime);});  
thisTimer.on('complete',function(durationTime){console.log('Duration ' + durationTime);});  
thisTimer.on('lag',function(lagTime){console.log('Lag Time ' + lagTime);});  

setTimeout(function(){thisTimer.startTimer(10,30);},5000);
setTimeout(thisTimer.stopTimer,15000);
