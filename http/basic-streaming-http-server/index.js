const server = require('http').createServer();

server.on('request', (req, res) => {
	res.writeHead(200, { 'Content-type': 'text/plain' });
	res.write('Hello World!');

	setTimeout(()=> { res.write('Hello Again!'); }, 2000);
});

server.listen(8008);

server.timeout = 1000;
console.log(server.timeout);
