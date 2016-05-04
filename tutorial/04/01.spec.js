'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var spy = chai.spy.on(console, 'log');

/// load('template-literal.js')

describe('01 template', () => {

	it('doesn\'t exist', () => {
		expect(template).to.be.defined;
	});

	it('doesn\'t use a template literal (`)', () => {
		expect(template.toString()).to.match(/`/g);
	});

	it('shouldn\'t have regular quotes, only backticks (`)', () => {
		expect(template.toString()).not.to.match(/['"]/g);
	});

});
