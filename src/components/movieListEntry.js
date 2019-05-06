import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPanelHidden: true
    }

    this.toggleDataPanel = this.toggleDataPanel.bind(this);
    this.handleWatchClick = this.handleWatchClick.bind(this);
  }

  toggleDataPanel() {
    this.setState({
      dataPanelHidden: !this.state.dataPanelHidden
    })
  }

  handleWatchClick() {
    this.props.toggleWatched(this.props.movie.title);
  }

  render() {
    return(
      <div>
        <div className="movieListEntry" onClick={this.toggleDataPanel}>
          <p>{this.props.movie.title}</p>
        </div>
        <div className="dataPanel" hidden={this.state.dataPanelHidden}>
          <button 
            className={this.props.movie.watched ? "watched" : "toWatch"} 
            onClick={this.handleWatchClick}>
              {this.props.movie.watched ? "Watched" : "To Watch"}
          </button>
          <p>{this.props.movie.description}</p>  
        </div>
      </div>
    )
  }
}

export default MovieListEntry;