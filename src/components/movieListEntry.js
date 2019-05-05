import React from 'react';

const MovieListEntry = (props) => {
  return(
    <div className="movieListEntry">
      <p>{props.movie.title}</p>
      <button 
        className={props.movie.watched ? "watched" : "toWatch"} 
        onClick={function() { props.toggleWatched(props.movie.title) }}>
          {props.movie.watched ? "Watched" : "To Watch"}
      </button>
    </div>
  )
}

export default MovieListEntry;