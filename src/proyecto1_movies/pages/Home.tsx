import { Link } from "react-router-dom";
import useMovieSearch from "../hooks/useMovieSearch";

export default function Home() {
  const { movies } = useMovieSearch("marvel");
  return (
    <div>
      {movies.map((m) => (
        <div key={m.imdbID}>
          <Link to={`/movie/${m.imdbID}`}>{m.Title}</Link>
          <Link to={`/movie/${m.imdbID}`}>
            <img src={m.Poster} />
          </Link>
        </div>
      ))}
    </div>
  );
}
