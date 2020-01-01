import React, {Component} from 'react';

import axios from 'axios';
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps1, dps2, dps3, dps4, dps5; 
var chart;


var x1Value, x2Value, x3Value, x4Value, x5Value;
var y1Value, y2Value, y3Value, y4Value, y5Value;
var dataSet =[];
var dps1 = [];
var dps2 = [];
var rString;
var m;
var b;
var maxVal;

//define resultString in constructor
class App extends React.Component {
		linReg(){
		//seperate r string into m and b
                }
 
		addDataPointsAndRender() {
	      
               //rename to dataSet. ...
                
                dps1.push({
                    x: dataSet.xdata1,
                    y: y1Value
                });
		    dps1.push({
                    x: x2Value,
                    y: y2Value
                });
		    dps1.push({
                    x: x3Value,
                    y: y3Value
                });
		    dps1.push({
                    x: x4Value,
                    y: y4Value
                });
		    dps1.push({
                    x: x5Value,
                    y: y5Value
                });

//figure out maximum x value

                for(var i =0; i < maxVal+5; i++) {
		 var x1 = i;
		 var y1 = (x1*m) +b;
		 dps2.push({
		 x: x1,
                 y: y1
		 
                });
                }
                chart.render();
            }

   getData()
	{
		var x1Value=Number(document.getElementById('xValue1').textContent);
		var x2Value=Number(document.getElementById('xValue2').textContent);
		var x3Value=Number(document.getElementById('xValue3').textContent);
	        var x4Value=Number(document.getElementById('xValue4').textContent);
	   	var x5Value=Number(document.getElementById('xValue5').textContent);

	   
	   
	        var y1Value=Number(document.getElementById('yValue1').textContent);
		var y2Value=Number(document.getElementById('yValue2').textContent);
		var y3Value=Number(document.getElementById('yValue3').textContent);
	        var y4Valu3=Number(document.getElementById('yValue4').textContent);
	   	var y5Value=Number(document.getElementById('yValue5').textContent);
    
    dataSet ={
      x1Value,
      x2Value,
      x3Value,
      x4Value,
      x5Value,

      y1Value,
      y2Value,
      y3Value,
      y4Value,
      y5Value
    }
	}
   
 componentDidMount() {
    axios.get('/equation', {
  method: 'POST',
  body: dataSet
	})
	.then((response) => {
  resultString.json().then((rSquareString)=>this.setState({ resultString: resultString }))
	}) 
.catch(
  error => null 
	);
  }
 
      
		



  render() {
          {this.componentDidMount()};

           rString =  this.resultString;
          
	   {this.linReg()};
            chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Linear Regression"
                },
                data: [{
                    type: "scatter",
                    dataPoints: dps1
                },
		{
		  type: "line",
		  dataPoints: dps2
                 }
                ]
            });


            {this.addDataPointsAndRender()};
            

	     

           



 
    return (
       
      <form >
        <label>
          X Data point 1:
          <input type="text" id="xValue1"  />
        </label >
	      <label>
          Y Data point 1:
          <input type="text" id="yValue1" />
        </label>
      <label>
          X Data point 2:
          <input type="text" id="xValue2"  />
        </label>
      <label>
          Y Data point 2:
          <input type="text" id="yValue2" />
        </label>
      <label>
          X Data point 3:
          <input type="text" id="xValue3" />
        </label>
     <label>
          Y Data point 3:
          <input type="text" id="yValue3" />
        </label>
      <label>
          X Data point 4:
          <input type="text" id="xValue4" />
        </label>
	<label>
          Y Data point 4:
          <input type="text" id="yValue4" />
        </label>
      <label>
          X Data point 5:
          <input type="text" id="xValue5" />
        </label>
	     <label>
          Y Data point 5:
          <input type="text"  id="yValue5"/>
        </label>
        
	    <button onClick={this.getData()}>

          Submit
       </button>
       <div>
        <CanvasJSChart chart= {chart} />
      </div>
        
    </form>
	   
 
	 
       
         
      
 
    );
	  
	  
  }
}
export default App;
