const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = 8080;

app.use(express.static(__dirname + '/dist/kezo-front'));
console.log(__dirname + '/dist/kezo-front');
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log('Running...'));
