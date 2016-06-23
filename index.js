var BasicTimer=require('./lib/BasicTimer');

var thisTimer= new BasicTimer();
var count=0;

thisTimer.on('tick',function(name){console.log('tick-tock'); count++;});  //+ JSON.stringify(thisTimer.getIntervalId())

/*
  thisTimer.on('start',function(name){console.log(name + count); count++;});  //+ JSON.stringify(thisTimer.getIntervalId())
  thisTimer.on('stop',function(name){console.log(name + count); count++;});
  thisTimer.on('complete',function(name){console.log(name + count); count++;});
  thisTimer.on('lag',function(thisLagTime){console.log('This Lag time =' + thisLagTime); count++;});


function stop()
{
 thisTimer.stopTimer();
  console.log("stopped at " + count);
}

setTimeout(thisTimer.startTimer,5000);
setTimeout(thisTimer.stopTimer,8000);*/