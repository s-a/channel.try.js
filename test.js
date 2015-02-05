 var
	fs = require("fs"),
	assert = require("assert"),
	should = require("should"),
	JSHINT = require("jshint").JSHINT,
	source = fs.readFileSync("./channel.json").toString(),
	options = JSON.parse(fs.readFileSync("./.jshintrc", "utf8"));




describe('channel.json should be valid against .jshintrc', function(){
	
	it('should have no errors', function(done){

		JSHINT(source, options);
		var report = JSHINT.data();

		should.not.exist(report.errors);
		if (report.errors){
			//report.errors.length.should.equal(0);
			//for (var i = 0; i < report.errors.length; i++) {
			//	var err = report.errors[i];
			  	//err.reason.should.equal("");
			//}
		}


		done();
	});

});