import React, { useContext, useState } from 'react';
import { MovieContext } from '../MovieContext/MovieContext';
import './SearchForm.css'

const SearchForm = () => {
  const { setSearchQuery } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: 20,display:'flex' }}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Please Search for Movie'
        style={{ height: 40, width: 300 ,fontSize:15,paddingLeft:'2%'}}
      />
      <button type="submit" className='Btn'>Search</button>
    </form>
  );
};

export default SearchForm;
