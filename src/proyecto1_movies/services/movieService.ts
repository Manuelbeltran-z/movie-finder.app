import { Movie, MovieDetails } from "../types";

const VITE_OMDB_KEY = import.meta.env.VITE_OMDB_KEY;

export async function searchMovies(query: string): Promise<Movie> {
  const searchUrl = `https://www.omdbapi.com/?s=${query}&apikey=${VITE_OMDB_KEY}`;
  const res = await fetch(searchUrl);
  if (!res.ok) throw new Error("Error");
  return res.json();
}

export async function detailsMovies(id: string): Promise<MovieDetails> {
  const detailUrl = `https://www.omdbapi.com/?i=${id}&apikey=${VITE_OMDB_KEY}`;
  const res = await fetch(detailUrl);
  if (!res.ok) throw new Error("Error");
  return res.json();
}
