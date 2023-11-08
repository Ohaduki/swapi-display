import React from 'react';
import styled from 'styled-components';

function MovieItem({ movie, onMovieSelect }) {
  return (
    <MovieItemDiv poster={movie.poster} key={movie.episode_id} onClick={() => onMovieSelect(movie)}>
        <span>{movie.title}</span>
    </MovieItemDiv>
  );
}

const MovieItemDiv = styled.div`

  font-family: 'Star Wars', sans-serif;
  font-size: 0.5rem;
  cursor: pointer;
  height: 15vh;
  width: 10vh;
  background-color: #FFC300;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 1vh;
  align-items: center;
  text-align: center;
  color: #ffe81e;
  border-radius: 5px;
  background: url(${props => props.poster});
  background-size: cover;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

  & span {
    margin-bottom: 1vh;
  }

  @media (min-width: 720px) {
    height: 35vh;
    width: 13vw;
    font-size: 1rem;
  }
`

export default MovieItem;