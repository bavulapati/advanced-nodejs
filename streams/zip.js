const crypto = require('crypto');
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
const { Transform } = require('stream');

const reportStatusStream = new Transform({
	transform(chunk, encoding, callback) {
		process.stdout.write('.');
		callback(null, chunk); // pushing data
	}
});


fs.createReadStream(file)
	.pipe(zlib.createGzip())
	.pipe(crypto.createCipheriv('aes-256-cbc', Buffer.from('12345678912345678912345678912345'), Buffer.from('1234567890123456')))
	.pipe(reportStatusStream)
//	.on('data', () => process.stdout.write('.'))
//	.pipe(fs.createWriteStream(file + '.gz'))
	.pipe(fs.createWriteStream(file + '.zz'))
	.on('finish', () => console.log('Done'));

