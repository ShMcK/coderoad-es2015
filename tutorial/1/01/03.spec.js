describe('03 the for loop', () => {

	it('isn\'t logging from 1 to 5', () => {
		expect(spy.__spy.calls[4][0]).to.equal(1);
		expect(spy.__spy.calls[8][0]).to.equal(5);
	});

});
