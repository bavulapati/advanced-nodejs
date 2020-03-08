const fs = require("fs");

function fileSize(fileName, cb) {
	if(typeof fileName !==  "string") {
		// return cb(new TypeError("Argument should be string");
		return process.nextTick(
				cb,
				new TypeError("Argument should be string")
				);
	}
	fs.stat(fileName, (err, stats) => {
		if(err) {
			return cb(err);
		}
		cb(null, stats.size);
	});
}

// fileSize(__filename, (err, size) => {
fileSize(9, (err, size) => {
	if(err) throw err;
	console.log("Size in KB: ", size/1024);
});

console.log("Hello!");

