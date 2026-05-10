export interface MovieSearch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Movie {
  Search: MovieSearch[];
  totalResults: string;
  Response: string;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Plot: string;
  Poster: string;
  imdbID: string;
  imdbRating: string;
  Genre: string;
  Director: string;
  Response: string;
}
