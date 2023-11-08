import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import './App.css';
import styled from 'styled-components';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }

  return (
    <AppDiv className="App" selected = {selectedMovie ? true : false}>
      <MovieDetails movie={selectedMovie} favorites={favorites} onFavoriteToggle={handleFavorite}/>
      <MovieList onMovieSelect={handleMovieSelect}/>
      <img src='./hd-posters/ship.jpg' alt='The background'/>
    </AppDiv>
  );

}

const AppDiv = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row-reverse nowrap;
  align-items: center;
  justify-content: ${props => props.selected ? 'space-between' : 'space-around'};
  height: 100vh;
  width: 95vw;
  margin: 0 auto;

  & img {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-position: center;
    z-index: -1000;
    top: 0;
    left: 0;
    opacity: 0.7;
  }


  @media (min-width: 720px) {
    flex-direction: column;
    justify-content: center;
  }
`


export default App;