


class NameForm extends React.Component {
   getData=()=>
	{
		var xdata1=document.getElementById('data1').value;
		var xdata2=document.getElementById('data2').value;
		var xdata3=document.getElementById('data3').value;
	        var xdata4=document.getElementById('data4').value;
	   
	   
	        var ydata1=document.getElementById('data1').value;
		var ydata2=document.getElementById('data2').value;
		var ydata3=document.getElementById('data3').value;
	        var ydata4=document.getElementById('data4').value;
	}
   
   //from https://canvasjs.com/docs/charts/how-to/render-chart-by-accepting-datapoints-from-user-input/
        window.onload = function() {
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

            function addDataPointsAndRender() {
                x1Value = Number(document.getElementById("xValue").value);
                x2Value = Number(document.getElementById("yValue").value);
		x3Value = Number(document.getElementById("xValue").value);
                x4Value = Number(document.getElementById("yValue").value);
		x5Value = Number(document.getElementById("yValue").value);
		    
		y1Value = Number(document.getElementById("xValue").value);
                y2Value = Number(document.getElementById("yValue").value);
		y3Value = Number(document.getElementById("xValue").value);
                y4Value = Number(document.getElementById("yValue").value);
		y5Value = Number(document.getElementById("yValue").value);

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
        }

  render() {
    return (
      <form onSubmit={this.handleSubmit} />
        <label>
          X Data point 1:
          <input type="text"  />
        </label>
	  <label>
          Y Data point 1:
          <input type="text"  />
        </label>
      <label>
          X Data point 2:
          <input type="text"  />
        </label>
      <label>
          Y Data point 2:
          <input type="text"  />
        </label>
      <label>
          X Data point 3:
          <input type="text"  />
        </label>
     <label>
          Y Data point 3:
          <input type="text"  />
        </label>
      <label>
          X Data point 4:
          <input type="text"  />
        </label>
	<label>
          Y Data point 4:
          <input type="text"  />
        </label>
      <label>
          X Data point 5:
          <input type="text"  />
        </label>
	<label>
          Y Data point 5:
          <input type="text"  />
        </label>
 
      </form>
	    <button onclick={this.getData} var="renderButton">Submit</button>

      
 
    );
  }
}
