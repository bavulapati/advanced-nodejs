const { spawn } = require('child_process');

// const child = spawn('pwd');
const child = spawn('find', ['ssfsdfg', '-type', 'f']);

child.on('exit', (code, signal) => {
	console.log(`Child exited with code ${code} and signal ${signal}`);
});

child.stdout.on('data', (data) => {
	console.log(`stdout :\n${data}`);
});

child.stderr.on('data', (data) => {
	console.error(`stderr : \n${data}`);
});

