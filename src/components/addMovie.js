import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.addMovie(this.state.input);
  }
  
  render() {
    return(
      <div className="addMovie">
        <input type="text" placeholder="add a movie title" onChange={this.handleChange}></input>
        <input type="submit" onClick={this.handleSubmit}></input>
      </div>
    )
  }
}


export default AddMovie;