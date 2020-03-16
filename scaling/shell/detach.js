const { spawn } = require('child_process');

const child = spawn('node', ['timer.js'], { detach: true, stdio: 'ignore' });

child.unref();

