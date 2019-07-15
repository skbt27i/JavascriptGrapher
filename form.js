


class NameForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
      
      <div class = "graphBox">
      
      </div>
    );
  }
}
