'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var spy = chai.spy.on(console, 'log');

/// load('arrow-function.js')

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
