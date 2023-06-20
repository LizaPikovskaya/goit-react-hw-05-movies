import axios from "axios";

const API_KEY = '6c75f517288c8a390bd4f3c255485a07';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.params ={
  api_key: API_KEY,
};

export const fetchPopularMovies = () => {
return axios.get()
}

// export const getMovieById = (data, id) => {
//   return data.find(item => item.id === id);
// };
