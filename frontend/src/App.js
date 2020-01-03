import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import axios from 'axios';
var CanvasJS = CanvasJSReact.CanvasJS;

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var x1Value, x2Value, x3Value, x4Value, x5Value;
var y1Value, y2Value, y3Value, y4Value, y5Value;

var m;
var b;
var maxVal;
var dataSet = [];
var dps1 =[{x:1, y:1}, {x:1, y:1}, {x:1, y:1}, {x:1, y:1}, {x:1, y:1}];
var dps2 =[{x:1, y:1}, {x:1, y:1}, {x:1, y:1}, {x:1, y:1}, {x:1, y:1}];


class App extends Component {
	constructor(){
		super();
		this.state = {resultString: '', x1: 0, x2: 0, x3: 0, x4: 0, x5: 0, y1:0, y2: 0, y3: 0, y4: 0, y5:0, dps1, dps2};
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.linReg = this.linReg.bind(this);

    }
   
   
	
			linReg(e) {
        
        axios.post('http://localhost:4000/api/routes/equation', {
          data: dataSet
          })
          .then((response) => {
            
            this.setState({ resultString: response.data });
            console.log(this.state.resultString);
            
          },
          (error) => {
           console.log(error);
        });


        
      }

        //modify dps2 to achieve linear regression
        setLine(){

        } 
    
    handleChange (e) {
     
      this.setState({[e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value});
    }
	
	getData (event)  {
		event.preventDefault();
		dataSet = [];
		
    
    
    this.state.dps1[0].x = this.state.x1;
    dataSet.push(this.state.x1);
    this.state.dps1[0].y = this.state.y1;
    dataSet.push(this.state.y1);

    this.state.dps1[1].x = this.state.x2;
    dataSet.push(this.state.x2);
    this.state.dps1[1].y =this.state.y2;
    dataSet.push(this.state.y2);

    this.state.dps1[2].x = this.state.x3;
    dataSet.push(this.state.x3);
    this.state.dps1[2].y = this.state.y3;
    dataSet.push(this.state.y3);
    
    this.state.dps1[3].x = this.state.x4;
    dataSet.push(this.state.x4);
    this.state.dps1[3].y = this.state.y4;
    dataSet.push(this.state.y4);

    this.state.dps1[4].x = this.state.x5;
    dataSet.push(this.state.x5);
    this.state.dps1[4].y = this.state.y5;
    dataSet.push(this.state.y5);
    this.linReg();
		
	
		
		
		this.chart.render();


	
		}
	render() {
		const options =  {
			title: {
				text: "Linear Regression"
			},
			data: [{
				type: "scatter",
				dataPoints: this.state.dps1
			},
			 {
				type: "line",
				dataPoints: this.state.dps2
			 }
			]
		}
		
		return (
      
	<div>
		<h1>React Line Chart</h1>
			<CanvasJSChart options = {options} 
				  onRef={ref => this.chart = ref} 
			/>
      
    <label>
      Linear Regression Data:
    </label>
    {this.state.resultString}
      
		<form onSubmit ={this.getData}>
        <label>
          X Data point 1:
          </label>
          <input type="number" name="x1"  onChange={this.handleChange}/>
        
	      <label>
          Y Data point 1:
          </label>
          <input type="number" name="y1" onChange={this.handleChange}/>
        
      <label>
          X Data point 2:
          </label>
          <input type="number" name="x2" onChange={this.handleChange} />
        
      <label>
          Y Data point 2:
          </label>
          <input type="number" name="y2" onChange={this.handleChange}/>
        
      <label>
          X Data point 3:
          </label>
          <input type="number" name="x3" onChange={this.handleChange}/>
      
     <label>
          Y Data point 3:
          </label>
          <input type="number" name="y3" onChange={this.handleChange} />
        
      <label>
          X Data point 4:
          </label>
          <input type="number" name="x4" onChange={this.handleChange}/>
        
	<label>
          Y Data point 4:
          </label>
          <input type="number" name="y4" onChange={this.handleChange}/>
        
      <label>
          X Data point 5:
          </label>
          <input type="number" name="x5" onChange={this.handleChange}/>
        
	     <label>
          Y Data point 5:
          </label>
          <input type="number"  name="y5" onChange={this.handleChange}/>
        
        <input type="submit" value="Submit" />

    </form>
    
 
			
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default App;             
