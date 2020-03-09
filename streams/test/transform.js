const { Transform } = require('stream');

const trStream = new Transform({
	transform(chunk, encoding, callback) {
		console.log(chunk.toString().toUpperCase());
		callback();
	}
});

process.stdin.pipe(trStream).pipe(process.stdout);

