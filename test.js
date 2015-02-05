 var
	fs = require("fs"),
	assert = require("assert"),
	should = require("should"),
	JSHINT = require("jshint").JSHINT,
	source = fs.readFileSync("./channel.json").toString(),
	options = JSON.parse(fs.readFileSync("./.jshintrc", "utf8")),
	validUrl = require('valid-url');




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


describe('channel.json should be valid', function(){

	var settings = JSON.parse(source);
	var packages = settings.packages;
	it('should contain obligation fields', function(done){

		should.exist(settings.packages);
		for (var p = 0; p < packages.length; p++) {
			var package = packages[p];
			should.exist(package.name);
			should.exist(package.description);
			should.exist(package.author);
			should.exist(package.environment);
		}

		done();
	});

	it('should contain good information fields', function(done){

		for (var p = 0; p < packages.length; p++) {
			var package = packages[p];
			package.name.length.should.be.above(5);
			package.description.length.should.be.above(20);
			package.author.length.should.be.above(2);
		}

		done();
	});

	it('should contain valid web address fields', function(done){

		for (var p = 0; p < packages.length; p++) {
			var package = packages[p];
			validUrl.isUri(package.environment).should.not.be.undefined;

			if (package.program){
				validUrl.isUri(package.program).should.not.be.undefined;
			}

			if (package.test){
				validUrl.isUri(package.test).should.not.be.undefined;
			}
		}

		done();
	});


	it('should contain valid labels', function(done){

		for (var p = 0; p < packages.length; p++) {
			var package = packages[p];

			if (package.labels){
				package.labels.should.be.an.instanceOf(Array);
			}
		}

		done();
	});

});
