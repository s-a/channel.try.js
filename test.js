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
			var pack = packages[p];
			should.exist(pack.name);
			should.exist(pack.description);
			should.exist(pack.author);
			should.exist(pack.environment);
		}

		done();
	});

	it('should contain good information fields', function(done){
		for (var p = 0; p < packages.length; p++) {
			var pack = packages[p];
			pack.name.length.should.be.above(5);
			pack.name.length.should.be.below(60);
			pack.description.length.should.be.above(20);
			pack.description.length.should.be.below(180);
			pack.author.length.should.be.above(2);
		}
		done();
	});

	it('should contain valid web address fields', function(done){
		for (var p = 0; p < packages.length; p++) {
			var pack = packages[p];
			validUrl.isUri(pack.environment).should.not.be.undefined;

			if (pack.program){
				validUrl.isUri(pack.program).should.not.be.undefined;
			}

			if (pack.test){
				validUrl.isUri(pack.test).should.not.be.undefined;
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

	it('should not contain tabs', function(done){
		source.replace(/\t/g).should.equal(source);
		done();
	});
});