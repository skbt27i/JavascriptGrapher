const express = require("express");
const router = express.Router();
var dataString ='';



router.post('/equation', function(req, res)  {
    dataString = '';
    var spawn = require('child_process').spawn,
    py = spawn('python', ['./processing.py']),
    data = req.body.data
    
    



py.stdout.on('data', function(data){
  dataString += data.toString();
});

py.stdout.on('end', function(){
  console.log(dataString)
  res.send(dataString);
});

py.stdin.write(JSON.stringify(data));

py.stdin.end();


return res;

});


module.exports = router;