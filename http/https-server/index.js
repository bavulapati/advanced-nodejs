const fs = require('fs');
const server = require('https').createServer({
	key: fs.readFileSync('./key.pem'),
	cert: fs.readFileSync('./cert.pem')
});

server.on('request', (req, res) => {
	res.writeHead(200, { 'Content-type': 'text/plain' });
	res.write('Hello World!');

	setTimeout(()=> { res.write('Hello Again!'); res.end(); }, 2000);
});

server.listen(443);

server.timeout = 1000;
console.log(server.timeout);
