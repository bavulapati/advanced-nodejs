const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => { console.log('UDP server listening'); });

server.on('message', (msg, rinfo) => {
    console.log(`received message: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

const PORT = 3333;
const HOST = '127.0.0.1';

server.bind(PORT, HOST);

// Client
setInterval(()=>{
    const client = dgram.createSocket('udp4'); // we get a different port for each client

    client.send('Hello World!', PORT, HOST, (err) => {
        if (err) throw err;
        console.log('UDP message sent');
        client.close();
    });
}, 1000);

