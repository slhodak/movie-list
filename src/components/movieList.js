import React from 'react';
import MovieListEntry from './movieListEntry';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        {this.props.movies.map((movie, index) => {
          return(
            <MovieListEntry movie={movie} key={index} />
          )
        })}
      </ul>
    )
  }
}

export default MovieList;