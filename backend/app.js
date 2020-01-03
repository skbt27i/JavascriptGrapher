
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
var path = require('path');
const routes = require("./routes/routes.js");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const app = express();

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;