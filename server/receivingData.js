
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

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

let data = [];

app.get('/home', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(data));
});

app.post('/create', function(req, res) {
  var dataNext = {
        "x1": req.body.xdata1,
        "x2": req.body.xdata2,
        "x3": req.body.xdata3,
        "x4": req.body.xdata4,
        "x5": req.body.xdata5,
         
        "y1": req.body.ydata1,
        "y2": req.body.ydata2,
        "y3": req.body.ydata3,
        "y4": req.body.ydata4,
        "y5": req.body.ydata5,
    }
 for(i=1; i <=5; i++)
 {
   var aKey = "x";
   aKey += i.toString;
   data.push(dataNext.aKey);
 }
   for(i=1; i <=5; i++)
 {
   var aKey = "y";
   aKey += i.toString;
   data.push(dataNext.aKey);
 }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});

var spawn = require('child_process').spawn;
var py = spawn('python',["processing.py",data]);
var dataString = '';

// from https://www.sohamkamani.com/blog/2015/08/21/python-nodejs-comm/

py.stdout.on('data', function(data){
  dataString += data.toString();
});
py.stdout.on('end', function(){
  console.log('Sum of numbers=',dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();
