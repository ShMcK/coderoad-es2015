'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var spy = chai.spy.on(console, 'log');

/// load('let.js')

describe('01 varTest', () => {

	it('doesn\'t exist', () => {
		expect(varTest).to.be.defined;
	});

	it('hasn\'t been called', () => {
		expect(spy.__spy.calls[0][0]).to.equal(2);
		expect(spy.__spy.calls[1][0]).to.equal(2);
	});

});
