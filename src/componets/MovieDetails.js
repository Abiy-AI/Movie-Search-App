import React from "react";
import PropTypes from "prop-types";

function MovieDetails({
  posterUrl,
  title,
  rated,
  runtime,
  genre,
  plot,
  actors,
  rating,
}) {
  return (
    <article className="MovieDetails" style={{ display: "flex" }}>
      <div>
        <img src={posterUrl} alt={title} />
      </div>
      <div className="MovieDetails__details">
        <header style={{ display: "flex" }}>
          <h3 className="MovieDetails__title flex-1">{title}</h3>
          <div className="MovieDetails__rating flex-1">{rating}</div>
        </header>

        <ul className="MovieDetails__tags">
          <li>{rated}</li>
          <li>{runtime}</li>
          <li>{genre}</li>
        </ul>

        <div>
          <h4 className="MovieDetails__subtitle">Plot</h4>
          <p className="MovieDetails__description">{plot}</p>

          <h4 className="MovieDetails__subtitle">Actors</h4>
          <p className="MovieDetails__description">{actors}</p>
        </div>
      </div>
    </article>
  );
}

/* BONUS */
// The defaults in case no corresponding prop values are passed
MovieDetails.defaultProps = {
  posterUrl: "",
  title: "",
  rated: "",
  runtime: "",
  genre: "",
  plot: "",
  actors: "",
  rating: "",
};

/* BONUS */
// Type safety check to ensure each prop is pass a valid type. For example if it's suppose to be a string, this will
// warn you in console if it's not
MovieDetails.propTypes = {
  posterUrl: PropTypes.string,
  title: PropTypes.string,
  rated: PropTypes.string,
  runtime: PropTypes.string,
  genre: PropTypes.string,
  plot: PropTypes.string,
  actors: PropTypes.string,
  rating: PropTypes.string,
};

export default MovieDetails;
