var BasicTimer=require('./lib/BasicTimer');

var thisTimer= new BasicTimer();
var count=0;

thisTimer.on('tick',function(){console.log('tick-tock'); count++;});  //+ JSON.stringify(thisTimer.getIntervalId())
thisTimer.on('start',function(startTime){console.log('Start at ' + startTime);});
thisTimer.on('stop',function(stopTime){console.log('Stopped at ' + stopTime);});  

setTimeout(thisTimer.startTimer,5000);
setTimeout(thisTimer.stopTimer,8000);
