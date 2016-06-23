var Dog=require('./lib/Dog');
var util=require('util');

var listernerBarkCount=0;
var thisDog= new Dog();
var seconds=0;
var lastPlayTime=0;
var intervalId;

intervalId=setInterval(function(){console.log('seconds=' + seconds++)},1000);

for(var i=1; i< 3; i++)
{  
setTimeout(letsPlaySpeak,(lastPlayTime+(i*3000)));
setTimeout(sit,(lastPlayTime+(i*6000)));
lastPlayTime+=(i*6000);
}

setTimeout(endPlay,lastPlayTime + 2000);

function endPlay(){
    console.log("End Play");
  clearInterval(intervalId);
}

function listenForBark(){    
    console.log("I heard " + listernerBarkCount + " barks");
    console.log(thisDog.listenerCount('bark') + 'listeners');
}


// open Window is setting the listener
function letsPlaySpeak(numberOfBarks){
  console.log("I'm ready to listen to you bark"); 
  thisDog.removeAllListeners('bark');  //<-- if you don't remove you will have more than one listener and same amount of lister outputs
  thisDog.on('bark',function(){console.log('I heard you!')});
  thisDog.speak();
}


// When Dog is sitting Dog is not barking
function sit(){
  var listeners=thisDog.listenerCount('bark');
  console.log("Just sit no barks");
  thisDog.sit();
  console.log("I'm still listening but no barks");
}

         
