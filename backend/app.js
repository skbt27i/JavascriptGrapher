
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const routes = require("./routes/routes.js");

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/routes', routes);

let data = [];

app.get('/home', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(data));
});


app.listen(3001, () => {
  console.log('Server listening on port 3001');
});


module.exports = app;