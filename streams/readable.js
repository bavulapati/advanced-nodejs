const { Readable } = require('stream');

// const inStream = new Readable();

// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// inStream.push(null);

const inStream = new Readable({
	read(size) { // produce on demand
		setTimeout(() => {
			if (this.charCode > 90) {
				this.push(null);
				return;
			}
			this.push(String.fromCharCode(this.charCode++));
			
		}, 100); // add delay which creates a race condition where one timer pushes null and the other tries to push data.
	}
});


inStream.charCode = 65;
inStream.pipe(process.stdout);

process.on('exit', () => {  // when we use node readable.js | head -c3 we will get an unhandled errror
	console.error(`\n\ncurrent code ${inStream.charCode}`);
});

process.stdout.on('error', ()=> {
	process.exit(1);
})
