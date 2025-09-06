export const OMDB_CONFIG = {
  BASE_URL: "http://www.omdbapi.com",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
};

export const fetchMovies = async ({ query }: { query: string }) => {
  // Default to 'Avengers' when no query provided
  const searchTerm = query;
  const endpoint = `${OMDB_CONFIG.BASE_URL}/?s=${encodeURIComponent(searchTerm)}&apikey=${OMDB_CONFIG.API_KEY}`;

  const response = await fetch(endpoint, { method: "GET" });
  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }

  const data = await response.json();
  return data.Search || [];
};

export const fetchMoviesDetails = async (movieId: string): Promise<MovieDetails> => {
  try {

    const res = await fetch(`${OMDB_CONFIG.BASE_URL}/?apikey=${OMDB_CONFIG.API_KEY}&i=${movieId}&plot=full`, {
      method: "GET",
    });
    
    if (!res.ok) 
      throw new Error(`Failed to fetch movie details: ${res.statusText}`);

    const data = await res.json();
    
    // Check if OMDB returned an error
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Movie not found');
    }
    
    return data;
  } 
  catch (error) {
    console.log(error);
    throw error;
  }
}
