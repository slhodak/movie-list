import React from 'react';
import MovieList from './movieList';
import SearchBar from './search';
import movies from '../data/movieData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    }
    this.searchList = this.searchList.bind(this);
  }

  searchList(input) {
    let found = false;
    this.state.movies.forEach((movie) => {
      movie.title.toLowerCase().split(' ').forEach((word) => {
        if (word === input.toLowerCase().trim()) {
          found = true;
        }
      });
    });
    console.log(found);
    return found;
  }

  render() {
    return(
      <div>
        <h1 className="movieListHeader">Movie List</h1>
        <SearchBar search={this.searchList} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;