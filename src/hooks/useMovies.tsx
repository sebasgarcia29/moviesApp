import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {

  const [isLoading, setisLoading] = useState(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {

    const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setPeliculasEnCine(response.data.results);

    setisLoading(false);

  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading,
  };
};
