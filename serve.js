var StaticServer = require('static-server');

var server = new StaticServer({
  rootPath: '.',
  name: 'pendulum-waves',
  port: 8080,
  cors: '*',
  followSymlink: true,
});

server.start(function () {
  console.log('Server listening to', server.port);
  console.log('');
  console.log('Browse to http://localhost:8080');
});

