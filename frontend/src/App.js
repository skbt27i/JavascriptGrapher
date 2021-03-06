import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import "./App.css";
import axios from "axios";

var CanvasJS = CanvasJSReact.CanvasJS;

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var m, b, r2;
var dataSet = [];
var dps1 = [
  { x: 1, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 1 }
];
var dps2 = [
  { x: 1, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 1 }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      resultString: "",
      x1: 0,
      x2: 0,
      x3: 0,
      x4: 0,
      x5: 0,
      y1: 0,
      y2: 0,
      y3: 0,
      y4: 0,
      y5: 0,
      dps1,
      dps2,
      splitted: [],
      m,
      b,
      r2
    };
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.linReg = this.linReg.bind(this);
  }

  linReg() {
    axios
      .post("http://localhost:4000/api/routes/equation", {
        data: dataSet
      })
      .then(
        response => {
          this.setState({ splitted: response.data.split(" ") });
          var bHolder = this.state.splitted[0];
          var mHolder = this.state.splitted[3];
          var rHolder = this.state.splitted[6];
          console.log(this.state.splitted[0]);

          m = parseFloat(mHolder);
          b = parseFloat(bHolder);
          let string1 = " ";
          r2 = " " + parseFloat(rHolder);
          string1 = string1 + m + "X + " + b;
          this.setState({ resultString: string1 });

          for (var i = 0; i < this.state.dps2.length; i++) {
            this.state.dps2[i].y = m * this.state.dps2[i].x + b;
          }
          this.chart.render();
        },
        error => {
          console.log(error);
        }
      );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value
    });
  }

  getData(event) {
    event.preventDefault();
    dataSet = [];

    this.state.dps1[0].x = this.state.x1;
    this.state.dps2[0].x = 0;
    dataSet.push(this.state.x1);
    this.state.dps1[0].y = this.state.y1;
    dataSet.push(this.state.y1);

    this.state.dps1[1].x = this.state.x2;
    this.state.dps2[1].x = this.state.x2;
    dataSet.push(this.state.x2);
    this.state.dps1[1].y = this.state.y2;
    dataSet.push(this.state.y2);

    this.state.dps1[2].x = this.state.x3;
    this.state.dps2[2].x = this.state.x3;
    dataSet.push(this.state.x3);
    this.state.dps1[2].y = this.state.y3;
    dataSet.push(this.state.y3);

    this.state.dps1[3].x = this.state.x4;
    this.state.dps2[3].x = this.state.x4;
    dataSet.push(this.state.x4);
    this.state.dps1[3].y = this.state.y4;
    dataSet.push(this.state.y4);

    this.state.dps1[4].x = this.state.x5;
    this.state.dps2[4].x = this.state.x5;
    dataSet.push(this.state.x5);
    this.state.dps1[4].y = this.state.y5;
    dataSet.push(this.state.y5);
    this.linReg();
  }

  render() {
    const options = {
      title: {
        text: "Linear Regression"
      },
      data: [
        {
          type: "scatter",
          dataPoints: this.state.dps1
        },
        {
          type: "line",
          dataPoints: this.state.dps2
        }
      ]
    };

    return (
      <div>
        <h1>React Line Chart</h1>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />

        <label>Linear Regression Equation:</label>
        {this.state.resultString}
        <br></br>
        <label>r^2:</label>
        {r2}
        <div className="form">
          <form onSubmit={this.getData}>
            <label>X Data point 1:</label>
            <input type="number" name="x1" onChange={this.handleChange} />
            <br></br>

            <label>Y Data point 1:</label>
            <input type="number" name="y1" onChange={this.handleChange} />

            <br></br>
            <label>X Data point 2:</label>
            <input type="number" name="x2" onChange={this.handleChange} />
            <br></br>
            <label>Y Data point 2:</label>
            <input type="number" name="y2" onChange={this.handleChange} />
            <br></br>
            <label>X Data point 3:</label>
            <input type="number" name="x3" onChange={this.handleChange} />
            <br></br>

            <label>Y Data point 3:</label>
            <input type="number" name="y3" onChange={this.handleChange} />
            <br></br>

            <label>X Data point 4:</label>
            <input type="number" name="x4" onChange={this.handleChange} />
            <br></br>
            <label>Y Data point 4:</label>
            <input type="number" name="y4" onChange={this.handleChange} />
            <br></br>
            <label>X Data point 5:</label>
            <input type="number" name="x5" onChange={this.handleChange} />
            <br></br>
            <label>Y Data point 5:</label>
            <input type="number" name="y5" onChange={this.handleChange} />
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </div>

        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default App;
