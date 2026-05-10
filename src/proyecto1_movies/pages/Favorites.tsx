import useFavorites from "../hooks/useFavorites";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) return <p>No hay favoritos</p>;
  return (
    <div>
      {favorites.map((f) => (
        <div key={f.imdbID}>
          <li>{<p>{f.Title}</p>}</li>
          <img src={f.Poster} />
          <button onClick={() => removeFavorite(f.imdbID)}>
            Eliminar Favorito
          </button>
        </div>
      ))}
    </div>
  );
}
