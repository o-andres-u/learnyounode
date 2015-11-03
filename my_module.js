// Node modules
var fs = require('fs');
var path = require('path');

module.exports = function (dirname, extfilter, callback) {
	var filter = '.' + extfilter;
	fs.readdir(dirname, function(err, files) {
		if (err) 
			return callback(err);
		list = files.filter(function (file) {
			return path.extname(file) === filter;
		});
		callback(null, list);
	});
};