var BasicTimer=require('./lib/BasicTimer');

var thisTimer= new BasicTimer();
var count=0;

thisTimer.on('tick',function(){console.log('tick-tock'); count++;});  //+ JSON.stringify(thisTimer.getIntervalId())
thisTimer.on('start',function(startTime){console.log('Start at ' + startTime);});
thisTimer.on('stop',function(stopTime){console.log('Stopped at ' + stopTime);});  
thisTimer.on('complete',function(durationTime){console.log('Duration ' + durationTime);});  


setTimeout(function(){thisTimer.startTimer(3);},5000);
setTimeout(thisTimer.stopTimer,15000);
