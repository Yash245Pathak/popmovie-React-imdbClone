import React, { useContext, useEffect, useState } from 'react'

export const API_KEY = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

// we need to create a provider function

const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const [query, setQuery] = useState('marvel');


    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
                setIsError({
                    show: "False",
                    msg: data.Error
                })
            } else {
                setIsError({
                    show: "True",
                    msg: data.Error
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let timeOut = setTimeout(()=> {
            getMovies(`${API_KEY}&s=${query}`);
        }, 800)
        return () => clearTimeout(timeOut)
    }, [query])


    return <AppContext.Provider value={{ isError, isLoading, movie, query, setQuery }}>{children}</AppContext.Provider>
}

const useGlobal = () => {
    return  useContext(AppContext);
}

export { AppContext, AppProvider, useGlobal }