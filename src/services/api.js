import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/'
});

export const fetchMovies = async () => {
  const response = await api.get('films/');
  return response.data.results;
};

export const omdbFetch = async (title) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=377412a0&s=${title}`);
  return response.data;
}
