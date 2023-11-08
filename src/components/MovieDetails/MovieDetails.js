import React from 'react';
import { styled, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'; 
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
  
    return (
      <MovieDetailsDiv id={movie.episode_id}>
        <MovieInfoDiv>
          <div style={{display:"flex", flexFlow:"row nowrap", alignItems:"center"}}>
            <h2>{movie.title}</h2>
            <div onClick={() => onFavoriteToggle(movie)} style={{cursor: 'pointer'}}>
              <FontAwesomeIcon icon={favorites.some(fav => fav.episode_id === movie.episode_id) ? fullStar : emptyStar} />
            </div>
          </div>
          <h3>Episode {movie.episode_id}</h3>
          <h3>Directed by {movie.director}</h3>
          <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target='blank'>To Imdb Page</a>
        </MovieInfoDiv>
      </MovieDetailsDiv>
    );
  }


const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

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
  color: #FFFFFF;
  align-items: center;
  justify-content: flex-start;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (min-width: 720px) {
    width: 85vw;
    height: 55vh;
    justify-content: flex-start;
    background-position: top;
  }


`

const MovieInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  margin: 0 0 0 1rem;
  align-items: flex-start;
  background-color: rgba(47, 79, 79, 0.5);
  border-radius: 5px;
  padding: 1rem;

  & h2 {
    padding-right: 1rem;
    font-family: 'Star Wars', sans-serif;
    font-size: 1.5rem;
  }

  & h3 {
    margin: 0;
    font-size: 1rem;
    font-family: 'Space Grotesk', sans-serif;
  }

  & a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1rem;
    font-family: 'Space Grotesk', sans-serif;
  }

  & a:hover {
    color: #FFC300;
  }


`

export default MovieDetails;