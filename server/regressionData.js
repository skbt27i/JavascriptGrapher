var spawn = require('child_process').spawn,
    py = spawn('python', ['processing.py']),
    inputString ='',
    rSquareString='',
    eqString ='',
    resultString ='',

py.stdout.on('data', function(inputString){
  inputString += ' ',
  resultString += inputString;
});

py.stdin.write(inputString);

py.stdin.end();


var lastStrings = resultString.split();

rSquareString = lastStrings[0];
eqString = lastStrings[1];
