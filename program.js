var summary = 0;

for (var i = 2; i < process.argv.length; i++) {
	summary = summary + Number(process.argv[i]);
}

console.log(summary)
