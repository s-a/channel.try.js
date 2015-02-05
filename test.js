 var
	assert = require("assert"),
	should = require("should");


describe('test1', function(){
	it('test2', function(done){
		var res = 1
		res.should.equal(1);
		done();
	});

	it('test3', function(done){
		var res = 1
		res.should.equal(1);
		done();
	});
});