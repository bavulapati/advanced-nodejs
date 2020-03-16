const { spawn } = require('child_process');

// const child = spawn('find . -type f | wc -l', { stdio: 'inherit', shell: true, cwd: '/home/balakrishna/Downloads' }); // different cwd, shell mode

spawn('echo $ANSWER', { stdio: 'inherit', shell: true, env: { ANSWER: 42}}); // overwriting env variables

