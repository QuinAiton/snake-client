//stores the active TCP connection object
let connection;


const handleUserInput = (char) => {
  if (char === '\u0003' || char === 'x') {
    process.exit();
  } else if (char === 'w') {
    connection.write('Move: up');
  } else if (char === 'd') {
    connection.write('Move: right');
  } else if (char == 's') {
    connection.write('Move: down');
  } else if (char === 'a') {
    connection.write('Move: left');

  }
}

//setup User Interface to handle user input via stdin
const setUpInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

setUpInput();

module.exports = setUpInput;