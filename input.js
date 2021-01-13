const handleUserInput = (char) => {
  if (char === '\u0003' || char === 'x') {
    process.exit();
  }
}

//setup User Interface to handle user input via stdin
const setUpInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

setUpInput();

module.exports = setUpInput;