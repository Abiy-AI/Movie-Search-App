import React from "react";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div style={{ display: "flex" }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          type={movie.Type}
          posterUrl={movie.Poster}
        />
      ))}
    </div>
  );
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
