var chai = require('chai');
var expect = chai.expect;

var sinon=require('sinon');

var BasicTimer=require('./BasicTimer');

var EventEmitter= require('events');

/*
function theFunction(){
  console.log('test');
};

var theModule={
  theFunction: theFunction,
}


describe('the spy',function(){
  var theSpy;

  beforeEach(function(){
    theSpy=sinon.spy(theModule,'theFunction');
  })

  it("should get invoked when invoked",function(){
  theFunction();
  expect(theSpy.called).to.be.true;
})
});
*/

describe('BasicTimer',function(){
  beforeEach(function(){
    this.clock = sinon.useFakeTimers();  // This mutates the clock
                                         //  so it can't be run again
  });

  afterEach(function(){
    this.clock.restore();
  })

  it('should be a function',function(){
    expect(BasicTimer).to.be.a('function');
  })

  it('shhould be an instnce of EventEmitter',function(){
    var timer = new BasicTimer();
    expect(timer).to.have.constructor(BasicTimer);
    expect(timer).to.be.an.instanceof(EventEmitter);
  })

  it('should a tick every second',function(){
    var tickHandler=sinon.spy();
    var tickHandler2=sinon.spy();

    var timer= new BasicTimer();
    timer.on('tick',tickHandler);

    var timer2= new BasicTimer();
    timer2.on('tick',tickHandler2);
    // Wait 1 second
    // 
    
    this.clock.tick(1000);
    expect(tickHandler.called).to.be.true; 

    this.clock.tick(500);
    expect(tickHandler.callCount).to.equal(1); 

    this.clock.tick(500);
    expect(tickHandler.callCount).to.equal(2); 

    this.clock.tick(1000);
  //  expect(tickHandler2.called).to.be.true; 
    expect(tickHandler2.callCount).to.equal(3); 

  })
})
