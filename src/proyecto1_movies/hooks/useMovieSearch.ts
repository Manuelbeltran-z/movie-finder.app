import { useEffect, useState } from "react";
import { searchMovies } from "../services/movieService";
import { MovieSearch } from "../types";

export default function useMovieSearch(query: string) {
  const [data, setData] = useState<MovieSearch[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setData([]);
      return;
    }
    async function fetchData() {
      try {
        setLoading(true);
        const result = await searchMovies(query);
        setData(result.Search ?? []);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);

  return { movies: data, loading, error };
}
