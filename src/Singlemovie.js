import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_KEY } from './context';
import './css/SingleMovie.css'

export default function Singlemovie() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if (data.Response === 'True') {
                setIsLoading(false);
                setMovie(data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovies(`${API_KEY}&i=${id}`)
    }, [id])

    if (isLoading) {
        return (
            <div className="loading" style={{ textAlign: 'center', marginTop: '80px', textShadow: '1px 1px 4px black', fontSize: 'larger' }}>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <>
            <div className="single-movie-page">
                <div className="single-container">
                    <div className="single-poster">
                        <img src={movie.Poster} alt="" />
                    </div>
                    <div className="single-info">
                        <span>{movie.Title}</span>
                        <h4>Genre: {movie.Genre}</h4>
                        <p style={{fontWeight: '100'}}>Date: <strong>{movie.Released}</strong></p>
                        <p style={{fontWeight: '100'}}>Imdb Ratings: <strong>{movie.imdbRating}</strong></p>
                        <p style={{fontWeight: '100'}}>Country: <strong>{movie.Country}</strong></p>
                        <Link to='/' className='single-btn' style={{textDecoration: 'none'}}>Go Back</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
