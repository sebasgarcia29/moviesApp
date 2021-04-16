import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '29f9f1a6ec17918a23cf4fe3d8dd6eab',
    language: 'es-ES',
  },
});

export default movieDB;
