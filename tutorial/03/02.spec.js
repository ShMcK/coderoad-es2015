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
