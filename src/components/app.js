import React from 'react';
import MovieList from './movieList';
import SearchBar from './search';
import movies from '../data/movieData';
import _ from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      matches: []
    }
    this.searchList = this.searchList.bind(this);
  }

  searchList(input) {
    let matches = [];
    this.state.movies.forEach((movie) => {
      movie.title.toLowerCase().split(' ').forEach((word) => {
        if (word === input.toLowerCase().trim()) {
          matches.push(movie);
        }
      });
    });
    let noResultsElement = document.getElementById('noResults');
    if (!matches.length && input.length) {
      noResultsElement.hidden = false;
    } else {
      noResultsElement.hidden = true;
    }
    this.setState({
      matches: matches
    });
  }

  render() {
    return(
      <div>
        <h1 className="movieListHeader">Movie List</h1>
        <SearchBar search={this.searchList} />
        <h2 id="noResults" hidden={true}>Sorry, no results were found</h2>
        <MovieList movies={this.state.movies.filter((movie) => {
          return this.state.matches.length === 0 || _.includes(this.state.matches, movie);
        })} />
      </div>
    )
  }
}

export default App;