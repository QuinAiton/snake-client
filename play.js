const connect = require('./client'),
  setUpInput = require('./input');


console.log('connecting....');
setUpInput(connect());
