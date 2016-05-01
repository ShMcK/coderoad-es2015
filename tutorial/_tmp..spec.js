'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var spy = chai.spy.on(console, 'log');

// call `varTest()`
function varTest() {
	var x = 1;
	if (true) {
		var x = 2;
		console.log(x);
	}
	console.log(x);
}
varTest();

// use `let` and call `letTest()`
function letTest() {
	let x = 3;
	if (true) {
		let x = 4;
		console.log(x);
	}
	console.log(x);
}
letTest();

// log numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
	setTimeout(function() {
		console.log(i);
	})
}
// 6 6 6 6 6


describe('01 varTest', function() {

	it('doesn\'t exist', function() {
		expect(varTest).to.be.defined;
	});

	it('hasn\'t been called', function() {
		expect(spy.__spy.calls[0][0]).to.equal(2);
		expect(spy.__spy.calls[1][0]).to.equal(2);
	});

});

describe('02 letTest', function() {

	it('doesn\'t exist', function() {
		expect(letTest).to.be.defined;
	});

	it('should use `let` instead of `var`', function() {
		console.log('spy', spy);
		expect(spy).to.have.been.called.with(4);
	});

	it('isn\'t calling 4 & 3', function() {
		expect(spy.__spy.calls[2][0]).to.equal(4);
		expect(spy.__spy.calls[3][0]).to.equal(3);
	});

});

describe('03 the for loop', function() {

	it('isn\'t logging from 1 to 5', function() {
		expect(spy.__spy.calls[4][0]).to.equal(1);
		expect(spy.__spy.calls[8][0]).to.equal(5);
	});

});

