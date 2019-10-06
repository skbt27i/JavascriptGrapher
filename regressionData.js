var spawn = require('child_process').spawn,
    py = spawn('python', ['processing.py']),
    inputString ='',
    resultString ='',

py.stdout.on('data', function(inputString){
  inputString += ' ',
  resultString += inputString;
});

py.stdin.write(inputString);

py.stdin.end();

