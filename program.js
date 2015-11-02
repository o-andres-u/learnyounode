var fs = require('fs');

var file = process.argv[2];
var bufferContent = fs.readFileSync(file, 'utf-8');
var lines = bufferContent.split('\n');

console.log(lines.length - 1);