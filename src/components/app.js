import React from 'react';
import MovieList from './movieList';
import SearchBar from './search';
import AddMovie from './addMovie';
import movies from '../data/movieData';
import searchDB from '../actions/searchMovies';
import _ from 'lodash';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      matches: [],
      firstLoad: true
    }

    this.searchList = this.searchList.bind(this);
    this.addMovie= this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.filterWatched = this.filterWatched.bind(this);
  }

  componentDidMount() {
    this.filterWatched({target: {id: 'showAll'}});
    this.state.firstLoad ? this.loadMovieData() : null;
  }

  loadMovieData() {
    //  add real movie descriptions when page is loaded
    movies.forEach(movie => {
      searchDB(movie.title, (data) => {
        movie.description = data[0].overview;
      });
    });
    this.setState({
      movies: movies,
      firstLoad: false
    });
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
      matches: matches,
      firstLoad: false
    });
  }

  addMovie(title) {
    searchDB(title, data => {
      let movie = {
        title: title,
        description: data[0].overview,
        watched: false
      }
      this.setState({
        movies: this.state.movies.concat(movie)
      });
    });
  }

  toggleWatched(movieTitle) {
    let movieList = [];
    this.state.movies.forEach(movie => {
      movie.title.toLowerCase() === movieTitle.toLowerCase() ? movie.watched = !movie.watched : null;
      movieList.push(movie);
    });
    this.setState({
      movies: movieList
    });
  }

  filterWatched(event) {
    let matchedMovies = [];
    if (event.target.id === 'watched') {
      this.state.movies.forEach(movie => {
        movie.watched ? matchedMovies.push(movie) : null;
      });
    } else if (event.target.id === 'toWatch') {
      this.state.movies.forEach(movie => {
        movie.watched ? null : matchedMovies.push(movie);
      });
    } else {
      matchedMovies = this.state.movies;
    }
    this.setState({
      matches: matchedMovies
    });
  }

  render() {
    return(
      <div>
        <h1 className="movieListHeader">Movie List</h1>
        <div id="main">
          <SearchBar search={this.searchList} />
          <AddMovie addMovie={this.addMovie} />
          <h2 id="noResults" hidden={true}>Sorry, no results were found</h2>
          <div className="filterButtons">
            <button id="watched" onClick={this.filterWatched}>Watched</button>
            <button id="toWatch" onClick={this.filterWatched}>To Watch</button>
            <button id="showAll" onClick={this.filterWatched}>Show All</button>
          </div>
          <MovieList toggleWatched={this.toggleWatched} movies={this.state.movies.filter((movie) => {
            return _.includes(this.state.matches, movie);
          })} />
        </div>
      </div>
    )
  }
}

export default App;