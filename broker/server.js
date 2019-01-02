const mosca = require('mosca');

const db = {
  // if you want your client to get offline messages then store it in db
  type: 'mongo',
  url: 'mongodb://XXX', // use db url. mlab.com gives you free one 
  pubsubCollection: 'messages',
  mongo: {}
};

const settings = {
  port: 1883,
  backend: db,
	persistence: {
    factory: mosca.persistence.Mongo,
    url: "mongodb://XXX", // use db url
  }
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
  console.log('client connected', client.id);
});

server.on('published', (packet, client) => {
  console.log('Published', packet.payload);
});

server.on('ready', () => {
  console.log('Mosca server is running');
});

/*
  for more info 
  https://github.com/mcollina/mosca/wiki/Mosca-basic-usage
*/
