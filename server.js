// const express = require('express');
// const http = require('http');
// const path = require('path');

// const app = express();

// const port = 3001;

// app.use(express.static(__dirname + '/dist/kezo-front'));
// console.log(__dirname + '/dist/kezo-front');
// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

// const server = http.createServer(app);

// server.listen(port, () => console.log('Running...'));

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();

app.use(express.static('./dist/kezo-front'));


app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/kezo-front/' }
    );
});


app.listen(8080);
