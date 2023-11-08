import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';
import { getOmdbData } from '../../services/omdb';
import styled from 'styled-components';

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
    <MovieListDiv>
        {isLoading ? (
            <Loading message="Loading Movies..."/>
        ) : (
          movies.map(movie => (
            <MovieItem key={movie.episode_id} movie={movie} onMovieSelect={onMovieSelect} />
          ))
        )}
    </MovieListDiv>
);
}

const MovieListDiv = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 93vh;
  width: 20vw;

  @media (min-width: 720px) {
    flex-flow: row;
    width: 85vw;
    height: 35vh;
    justify-content: space-between;
    margin-top: 2rem;
  }
`


export default MovieList;
