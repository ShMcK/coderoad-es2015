'use strict';
var expect = require('chai').expect;

/// load('object-literal.js')

describe('01 getPersonObj', () => {

	it('doesn\'t exist', () => {
		expect(getPersonObj).to.be.defined;
	});

	it('should use the object shorthand', () => {
		expect(getPersonObj.toString()).not.to.match(/name:\s?name/g);
		expect(getPersonObj.toString()).not.to.match(/city:\s?city/g);
	});

	it('should return an object with name & city', function() {
		expect(getPersonObj('J', 'V')).to.deep.equal({
			name: 'J',
			city: 'V'
		});
	});

});
