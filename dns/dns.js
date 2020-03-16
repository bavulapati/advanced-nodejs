const dns = require('dns');

dns.lookup('hyderabad.remotepc.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});