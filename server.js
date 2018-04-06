'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();


app.use(morgan('common'));
app.use(express.static('public')); 
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('request made!');
  console.log(bodyResult);
  res.json(bodyResult);
});

let bodyResult;

//Server functions
let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    }).on('error', err => {
      reject(err);
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
} 

module.exports = { app };
