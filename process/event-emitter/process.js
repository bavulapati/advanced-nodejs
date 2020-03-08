// process is an event emitter

process.on('exit', (code) => {
	// do one final synchronous operation before the node process terminates
	// event loop will not be available here.
	console.log(`About to exit with code ${code}`);
});

process.on('uncaughtException', (err) => {
	// something went unhandled.
	// do any clean up and exit anyway!
	console.error(err);
	process.exit(1); // FORCE exit the process.
});

// trigger a TypeError exception
console.dog();

