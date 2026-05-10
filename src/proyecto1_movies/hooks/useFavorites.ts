import { useState } from "react";
import { MovieSearch } from "../types";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<MovieSearch[]>(() =>
    JSON.parse(localStorage.getItem("favoriteMovie") ?? "[]"),
  );

  function addFavorite(movie: MovieSearch) {
    if (isFavorite(movie.imdbID)) return;
    const newFavorite = [...favorites, movie];
    setFavorites(newFavorite);
    localStorage.setItem("favoriteMovie", JSON.stringify(newFavorite));
  }

  function removeFavorite(id: string) {
    const removeFavorite = favorites.filter((f) => f.imdbID !== id);
    setFavorites(removeFavorite);
    localStorage.setItem("favoriteMovie", JSON.stringify(removeFavorite));
  }

  function isFavorite(id: string) {
    return favorites.some((f) => f.imdbID === id);
  }

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
