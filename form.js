


class NameForm extends React.Component {
   getData=()=>
	{
		var data1=document.getElementById('data1').value;
		var data2=document.getElementById('data2').value;
		var data3=document.getElementById('data3').value;
	  var data4=document.getElementById('data4').value;
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

                dps1.push({
                    x1: xValue,
                    y: yValue
                });
		    dps2.push({
                    x2: xValue,
                    y: yValue
                });
		    dps3.push({
                    x3: xValue,
                    y: yValue
                });
		    dps4.push({
                    x4: xValue,
                    y: yValue
                });
		    dps5.push({
                    x5: xValue,
                    y: yValue
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
          Data point 1:
          <input type="text"  />
        </label>
      <label>
          Data point 2:
          <input type="text"  />
        </label>
      <label>
          Data point 3:
          <input type="text"  />
        </label>
      <label>
          Data point 4:
          <input type="text"  />
        </label>
      <label>
          Data point 5:
          <input type="text"  />
        </label>
 
      </form>
	    <button onclick={this.getData} var="renderButton">Submit</button>

      
 
    );
  }
}
