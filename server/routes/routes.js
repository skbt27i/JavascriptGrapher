const express = require("express");
const router = express.Router();


router.post('/create', function(req, res) {
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

router.post('/equation', function(req, res) {

});
