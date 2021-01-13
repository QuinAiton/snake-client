const net = require('net');

//establish connection with the game server 
const connect = () => {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541

  })

  conn.on('connect', () => {
    conn.write('Name: A10');
  });

  conn.on('data', (data) => {
    console.log(`server: ${data}`)
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

module.exports = connect;