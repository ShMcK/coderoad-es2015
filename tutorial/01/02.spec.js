describe('02 letTest', () => {

	it('doesn\'t exist', () => {
		expect(letTest).to.be.defined;
	});

	it('should use `let` instead of `var`', () => {
		console.log('spy', spy);
		expect(spy).to.have.been.called.with(4);
	});

	it('isn\'t calling 4 & 3', () => {
		expect(spy.__spy.calls[2][0]).to.equal(4);
		expect(spy.__spy.calls[3][0]).to.equal(3);
	});

});
