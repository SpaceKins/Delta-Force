var Barky=require('./lib/Barky');
var util=require('util');

var listernerBarkCount=0;
var thisDog= new Barky();


setTimeout(openWindow,3000);
setTimeout(closeWindow,5000);


// open Window is setting the listener
function openWindow(){
  thisDog.on('bark',function(thisCount){
    console.log("Listener heard " + listernerBarkCount); 
    listernerBarkCount++;
    console.log(thisDog.listenerCount('bark') + 'listeners');
  });
}

function closeWindow(){
  var listeners=thisDog.listenerCount('bark');
  console.log("Just Closed Window");
  console.log('There were ' + listeners + ' listeners');  
  console.log(util.inspect(thisDog.listeners('bark')));
  thisDog.removeAllListeners('bark');
  
 // thisDog.removeListener('bark',function(thisCount){console.log("Listener heard " + listernerBarkCount +"(s) then I closed the door"); listernerBarkCount++});  
}