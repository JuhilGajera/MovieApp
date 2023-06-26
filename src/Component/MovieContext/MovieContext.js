import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=ae059c8d&s=${searchQuery}`);
                if (response.data && response.data.Search) {
                    setMovies(response.data.Search);
                } else {
                    setMovies([]);
                }
            } catch (error) {
                console.log(error);
                setMovies([]);
            }
        };

        fetchData();
    }, [searchQuery]);

    return (
        <MovieContext.Provider value={{ movies, setSearchQuery }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
