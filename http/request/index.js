const http = require('http');

const req = http.request(
	{ hostname: 'www.google.com' },
	(res) => {
			console.log(res);
			res.on('data', (data) => console.log(data.toString()));
		}
	);
req.on('error', (e) => console.error(e));
// req.write('adjfaslfa'); if we are posting.
req.end();
