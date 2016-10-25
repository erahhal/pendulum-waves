const StaticServer = require('static-server');

const port = 8090;

const server = new StaticServer({
    rootPath: '.',
    name: 'pendulum-waves',
    port: port,
    cors: '*',
    followSymlink: true,
});

server.start(() => {
   console.log('Server listening to', server.port);
   console.log('');
   console.log(`Browse to http://localhost:${port}`);
});

