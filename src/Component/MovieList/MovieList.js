import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext/MovieContext';
import './MovieList.css'

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (

    <div className='mainCon'>
      {movies.map((movie) => (
        <div key={movie.imdbID} className='Container'>
          <h5>{movie.Title}</h5>
          <p style={{margin:0}}>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} className='poster' />
        </div>
      ))}
    </div>

  );
};

export default MovieList;
