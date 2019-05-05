import React from 'react';
import MovieList from './movieList';
import movies from '../data/movieData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    }
  }

  render() {
    return(
      <div>
        <h1 className="movieListHeader">Movie List</h1>
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;