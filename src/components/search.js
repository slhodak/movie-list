import React from 'react';

class SearchBar extends React.Component {
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
    //  displays async updated state
    setTimeout(
      () => {
        console.log(this.state.input);
      }, 100
    );
  }

  handleSubmit() {
    this.props.search(this.state.input);
  }
  
  render() {
    return(
      <div className="searchBar">
        <input id="searchInput" placeholder="search for a movie" type="text" onChange={this.handleChange}></input>
        <input type="submit" onClick={this.handleSubmit}></input>
      </div>
    )
  }
}

export default SearchBar;