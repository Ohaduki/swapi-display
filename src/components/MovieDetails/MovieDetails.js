import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'; 
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
  
    return (
      <MovieDetailsDiv id={movie.episode_id}>
        <h2>{movie.title}</h2>
        <div onClick={() => onFavoriteToggle(movie)} style={{cursor: 'pointer'}}>
          <FontAwesomeIcon icon={favorites.some(fav => fav.episode_id === movie.episode_id) ? fullStar : emptyStar} />
        </div>
      </MovieDetailsDiv>
    );
  }

const MovieDetailsDiv = styled.div`

  height: 93vh;
  background: url(./hd-posters/${props => props.id}.jpg);
  background-size: cover;
  background-position: center;
  width: 70vw;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  flex-direction: row nowrap;
  font-family: 'Star Wars', sans-serif;
  font-size: 1.3rem;
  color: #FFFFFF;
  align-items: center;
  justify-content: space-between;

  & h2 {
    padding: 0 1rem 0 1rem;
  }

  @media (min-width: 720px) {
    width: 85vw;
    height: 55vh;
    justify-content: flex-start;
    background-position: top;
  }
`

export default MovieDetails;