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
