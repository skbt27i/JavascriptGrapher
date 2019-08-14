


class NameForm extends React.Component {
   getData()
	{
		var data1=document.getElementById('data1').value;
		var data2=document.getElementById('data2').value;
		var data3=document.getElementById('data3').value;
	  var data4=document.getElementById('data4').value;
	}


  render() {
    return (
      <form onSubmit={this.handleSubmit} onclick={this.getData} />
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
 
        <input type="submit" value="Submit" />
      </form>
      
      <div class = "graph">
      
      </div>
    );
  }
}
