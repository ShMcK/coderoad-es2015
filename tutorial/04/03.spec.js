describe('03 expression', () => {

	it('doesn\'t exist', () => {
		expect(expression).to.be.defined;
	});

	it('doesn\'t use a template literal (`)', () => {
		expect(expression.toString()).to.match(/`/g);
	});

	it('should use expressions `{exp}`', () => {
		expect(expression.toString()).to.match(/${name}/g);
	});

	it('shouldn\'t have regular quotes, only backticks (`)', () => {
		expect(expression.toString()).not.to.match(/['"]/g);
	});

	it('it doesn\'t log the correct output', () => {
		expect(spy).to.have.been.called.with('Hello Joe, your bill is 2.59.');
	});

});
