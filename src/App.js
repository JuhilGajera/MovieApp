import React from 'react';
import MovieContextProvider from './Component/MovieContext/MovieContext';
import MovieList from './Component/MovieList/MovieList';
import SearchForm from './Component/SearchForm/SearchForm';
import './App.css'

const App = () => {
  return (
    <div className='mainContainer'>
      <MovieContextProvider>
        <SearchForm />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
};

export default App;
