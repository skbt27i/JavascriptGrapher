import React, {Component} from 'react';

import axios from 'axios';
import * as CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class NameForm extends React.Component {
   getData=()=>
	{
		var xdata1=Number(document.getElementById('xValue1').textContent);
		var xdata2=Number(document.getElementById('xValue2').textContent);
		var xdata3=Number(document.getElementById('xValue3').textContent);
	        var xdata4=Number(document.getElementById('xValue4').textContent);
	   	var xdata5=Number(document.getElementById('xValue5').textContent);

	   
	   
	        var ydata1=Number(document.getElementById('yValue1').textContent);
		var ydata2=Number(document.getElementById('yValue2').textContent);
		var ydata3=Number(document.getElementById('yValue3').textContent);
	        var ydata4=Number(document.getElementById('yValue4').textContent);
	   	var ydata5=Number(document.getElementById('yValue5').textContent);
    
    const dataSet ={
      xdata1,
      xdata2,
      xdata3,
      xdata4,
      xdata5,

      ydata1,
      ydata2,
      ydata3,
      ydata4,
      ydata5
    }
	        axios.post('https://localhost/3000/NameForm', dataSet)
	}
   //from https://stackoverflow.com/questions/50833719/sending-a-string-from-node-js-to-a-component-react-js
   componentDidMount() {
    const data = new FormData();

    fetch('http://localhost:3001/', {
  method: 'POST',
  body: data
	})
	.then((response) => {
  resultString.json().then((rSquareString)=>this.setState({ resultString: resultString }))
	}) 
.catch(
  error => null 
	);
  }
 


  render() {
    var dps = []; 

            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Linear Regression"
                },
                data: [{
                    type: "line",
                    dataPoints: dps1, dps2, dps3, dps4, dps5
                }]
            });

	     //from https://canvasjs.com/docs/charts/how-to/render-chart-by-accepting-datapoints-from-user-input/

            function addDataPointsAndRender() {
                x1Value = Number(document.getElementById("xValue1").textContent);
                x2Value = Number(document.getElementById("xValue2").textContent);
		x3Value = Number(document.getElementById("xValue3").textContent);
                x4Value = Number(document.getElementById("xValue4").textContent);
		x5Value = Number(document.getElementById("xValue5").textContent);
		    
		y1Value = Number(document.getElementById("yValue1").textContent);
                y2Value = Number(document.getElementById("yValue2").textContent);
		y3Value = Number(document.getElementById("yValue3").textContent);
                y4Value = Number(document.getElementById("yValue4").textContent);
		y5Value = Number(document.getElementById("yValue5").textContent);

                dps1.push({
                    x1: xValue,
                    y1: yValue
                });
		    dps2.push({
                    x2: xValue,
                    y2: yValue
                });
		    dps3.push({
                    x3: xValue,
                    y3: yValue
                });
		    dps4.push({
                    x4: xValue,
                    y4: yValue
                });
		    dps5.push({
                    x5: xValue,
                    y5: yValue
                });
                chart.render();
            }

            var renderButton = document.getElementById("renderButton");
            renderButton.addEventListener("click", addDataPointsAndRender);
 
    return (
       
      <form onSubmit={this.getData} >
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
        
	    <button onclick={getData}>
          Submit
       </button>
       <div>
        <CanvasJSChart chart= {chart} />
      </div>
        
    </form>
 
	 
       
         
      
 
    );
	  
	  
  }
}
export default NameForm;

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
