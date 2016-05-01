'use strict';
var chai = require('chai');
var spies = require('chai-spies');
var expect = chai.expect;
chai.use(spies);
var spy = chai.spy.on(console, 'log');

// change the output to a template literal

function template() {
  console.log('I know what a backtick is');
}
template();


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

describe('02 multiline', () => {

	it('doesn\'t exist', () => {
		expect(multiline).to.be.defined;
	});

	it('doesn\'t use a template literal (`)', () => {
		expect(multiline.toString()).to.match(/`/g);
	});

	it('shouldn\'t have regular quotes, only backticks (`)', () => {
		expect(multiline.toString()).not.to.match(/['"]/g);
	});

	it('it doesn\'t log the correct output', () => {
		expect(spy).to.have.been.called.with(`1.
2.
3.`);
	});

});

describe('03 expression', () => {

	it('doesn\'t exist', () => {
		expect(expression).to.be.defined;
	});

	it('doesn\'t use a template literal (`)', () => {
		expect(expression.toString()).to.match(/`/g);
	});

	it('shouldn\'t have regular quotes, only backticks (`)', () => {
		expect(expression.toString()).not.to.match(/['"]/g);
	});

	it('it doesn\'t log the correct output', () => {
		expect(spy).to.have.been.called.with('Hello Joe, your bill is 2.59.');
	});

});

