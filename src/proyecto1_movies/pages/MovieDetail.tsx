import { useEffect, useState } from "react";
import { MovieDetails } from "../types";
import { useParams } from "react-router-dom";
import { detailsMovies } from "../services/movieService";
import useFavorites from "../hooks/useFavorites";

export default function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { addFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    async function moviesDetailFetch() {
      try {
        setLoading(true);
        const res = await detailsMovies(id!);
        setData(res);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    moviesDetailFetch();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  return (
    <div>
      <p>{data.Title}</p>
      <p>{data.Year}</p>
      <p>{data.Plot}</p>
      <p>{data.Director}</p>
      <p>{data.imdbRating}</p>
      <img src={data.Poster}></img>
      <button
        disabled={isFavorite(data.imdbID)}
        onClick={() =>
          addFavorite({
            Title: data.Title,
            Year: data.Year,
            imdbID: data.imdbID,
            Poster: data.Poster,
            Type: "movie",
          })
        }
      >
        {!isFavorite(data.imdbID) ? "Add to Favorites" : "SAVED IN FAVORITES"}
      </button>
    </div>
  );
}
