// Node Modules
var my_module = require('./my_module');

// Local variables
var dir = process.argv[2];
var extfilter = process.argv[3];

my_module(dir, extfilter, function (err, data) {
	if (err) 
		return console.err(err);
	data.forEach(function (file) {
		console.log(file);
	});
});