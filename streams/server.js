const server = require('http').createServer();
const fs = require('fs');

server.on('request', (req, res) => {
	// fs.readFile('./big.file', (err, data) => {
	// 	if(err) throw err;
		
	// 	res.end(data);
	// });
	
	const src = fs.createReadStream('./big.file');
	src.pipe(res);
});

server.listen(8080);

