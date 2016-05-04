'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var spy = chai.spy.on(console, 'log');

/// load('const.js')

describe('01 password', () => {
	// cannot redeclare
	it('should pass', () => {
		expect(true).to.be.true;
	})
});
