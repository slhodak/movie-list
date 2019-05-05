import React from 'react';

const MovieListEntry = (props) => {
  return(
    <div className="movieListEntry">
      <p>{props.movie.title}</p>
    </div>
  )
}

export default MovieListEntry;