

module.exports = function createLinReg(input) {
var spawn = require('child_process').spawn,
    py = spawn('python', ['processing.py']),
    data = input;
    resultString ='',

py.stdout.on('data', function(data){
  resultString += data.toString();
});

py.stdout.on('end', function(){
  return resultString;
});

py.stdin.write(JSON.stringify(data));

py.stdin.end();

};