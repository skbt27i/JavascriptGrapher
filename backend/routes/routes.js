const express = require("express");
const router = express.Router();

var equation = require('../regressionData.js');



router.post('/equation', function(req, res)  {
var totString = equation(req.body);
//specify what data is
//parse string for r2 and lin reg equation
});


module.exports = router;