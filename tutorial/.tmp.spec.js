'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var spy = chai.spy.on(console, 'log');

// use =>
const greet = function (name) {
	return 'hello ' + name;
}


describe('01 greet', () => {

	it('doesn\'t exist', () => {
		expect(greet).to.be.defined;
	});

	it('doesn\'t use an arrow function', () => {
		expect(greet.toString()).to.match(/=>/g);
	});

	it('doesn\'t return "hello " + name', () => {
		expect(greet('there')).to.equal('hello there');
	});

});

describe('02 getName', () => {

	it('doesn\'t exist', () => {
		expect(getName).to.be.defined;
	});

	it('doesn\'t use an arrow function', () => {
		expect(getName.toString()).to.match(/=>/g);
	});

	it('should not use the `return` keyword', () => {
		expect(getName.toString()).not.to.match(/return/g);
	});

	it('doesn\'t return the name "Joe"', () => {
		expect(getName()).to.equal('Joe');
	});

});

describe('03 clock', () => {

	it('try the example on CodePen', () => {
		expect(true).to.equal(true);
	});

});

