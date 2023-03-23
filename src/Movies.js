import React from 'react'
import './css/Movies.css'
import { useGlobal } from './context'
import { NavLink } from 'react-router-dom';

export const Movies = () => {
    const { movie, isLoading } = useGlobal();
    if (isLoading) {
        return (
            <div className="loading" style={{ textAlign: 'center', marginTop: '80px', textShadow: '1px 1px 4px black', fontSize: 'larger' }}>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <>
            <section className='movie-page'>
                <div className="grid">
                    {movie.map((curMovie) => {
                        const { imdbID, Title, Poster } = curMovie;
                        const movieName = Title.substring(0, 15);
                        return (
                            <NavLink to={`movie/${imdbID}`} key={imdbID} style={{ textDecoration: 'none', color: 'black' }}>
                                <div className="movie-card">
                                    <div className="movie-card-info">
                                        <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                                        <img src={Poster} alt={imdbID} />
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
