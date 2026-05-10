import { useEffect, useState } from "react";
import useMovieSearch from "../hooks/useMovieSearch";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const { error, loading, movies } = useMovieSearch(debouncedQuery);
  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {movies.length === 0 && debouncedQuery && !loading && (
        <p>No se encontraron resultados</p>
      )}
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h1>
        {movies.map((m) => (
          <li key={m.imdbID}>
            <Link to={`/movie/${m.imdbID}`}>{m.Title}</Link>
          </li>
        ))}
      </h1>
    </div>
  );
}
