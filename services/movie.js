const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_TMDB_API_URL;

const fetchMovieApi = async (path, query = '') => {
  try {
    const res = await fetch(`${API_URL}${path}?api_key=${API_KEY}&${query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchMovieApi;

export const getSingleCategory = async (id) => {
  return fetchMovieApi(`/discover/movie`, `with_genres=${id}`);
};

export const getTopRatedMovies = async () => {
  return fetchMovieApi('/movie/top_rated', '&page=1');
};
export const getPopularMovies = async () => {
  return fetchMovieApi('/movie/popular', '&page=1');
};
export const getCategories = async () => {
  return fetchMovieApi('/genre/movie/list', '&page=1');
};

export const getMovie = async (id) => {
  return fetchMovieApi(`/movie/${id}`);
};
