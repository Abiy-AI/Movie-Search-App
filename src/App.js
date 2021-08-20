import { useEffect, useState } from "react";

// Components
import MovieCard from "./componets/MovieCard";
import MovieDetails from "./componets/MovieDetails";
import Spinner from "./componets/Spinner";
import MovieList from "./componets/MovieList";

// Resources
import "./App.css";
import { getMoviesBySearchTerm } from "./utils"; // notice how we don't have to include .js extension

function App() {
  const [searchTerm, setSearchTerm] = useState("lion");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // Since fetch api is something that happens outside of the function where it's invoked, it's considered
  // a side effect, so we need to use inside a useEffect hook

  useEffect(() => {
    setIsLoading(true);

    getMoviesBySearchTerm(searchTerm)
      .then((movies) => {
        console.log(movies);

        setMovies(movies);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setMovies([]);
        console.error("Error:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // empty array, means never execute the effect again, do it only once and that's it

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Whoops! {error}</div>;
  }

  return (
    <div className="App">
      <h1>Movie App</h1>
      <MovieList movies={movies} />
      <MovieCard
        title={movie.Title}
        type={movie.Type}
        posterUrl={movie.Poster}
      />
      <div className="h-100"></div>
      <MovieDetails
        posterUrl={movie.Poster}
        title={movie.Title}
        rated={movie.Rated}
        runtime={movie.Runtime}
        genre={movie.Genre}
        plot={movie.Plot}
        actors={movie.Actors}
        rating={movie.Rating}
      />
    </div>
  );
}

export default App;
