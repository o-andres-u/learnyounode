// Node Modules
var fs = require('fs');
var path = require('path');

// Local variables
var dir = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(dir, function (err, files) {
	if (err) throw err;
	var extension = '';
	files.forEach(function (file) {
		extension = path.extname(file);
		if (extension === filter) {
			console.log(file);
		}
	});
});