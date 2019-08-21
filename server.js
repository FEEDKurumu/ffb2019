const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

let players;

fs.readFile('players.txt', (err, data) => { 
    if (err) throw err;
    players = data.toString();
})

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

let row = createNode('div');
let span = createNode('span');
append(row, span);

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(row);
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});
