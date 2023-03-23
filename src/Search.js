import React from 'react'
import './App.css'
import { useGlobal } from './context'

export const Search = () => {
    const { query, setQuery, isError } = useGlobal();
    return (
        <div className='search'>
            <span>Search your movies here...</span>
            <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder='Enter the name of movie here' />
            <p>{isError.show && isError.msg}</p>
        </div>
    )
}
