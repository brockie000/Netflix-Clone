import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import RowElement from './RowElement'

export default function Row({title, fetchUrl, isLarge}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const data = await axios.get(fetchUrl)
            setMovies(data.data.results)
        }
        getMovies()

    }, [fetchUrl])

    

    return (
        <div className='row'>
            <h2 className='title'>{title}</h2>
            
            <div className='movies'>
            {movies.map(movie => (
                ((isLarge && movie.poster_path) ||
                (!isLarge && movie.backdrop_path)) && (

                <div className='' >
                    <RowElement movie={movie} isLarge={isLarge} />
                </div>

                )
                
            ))}
            </div>
            
            
        </div>
    )
}
