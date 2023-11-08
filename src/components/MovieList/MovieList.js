import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';
import { getOmdbData } from '../../services/omdb';

function MovieList({ onMovieSelect }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovies();
        const completeData = []
        for(const movie of data){
          const omdb = await getOmdbData(movie.title)
          const completeMovie = {...movie, poster: omdb.Poster, imdbID: omdb.imdbID}
          completeData.push(completeMovie)
        }
        completeData.sort((a, b) => a.episode_id - b.episode_id)
        setMovies(completeData);
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
        {isLoading ? (
            <Loading message="Loading Movies..."/>
        ) : (
          movies.map(movie => (
            <MovieItem key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
          ))
        )}
    </div>
);
}

export default MovieList;
