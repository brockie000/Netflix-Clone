import React, { useState } from 'react'
import './Row.css'

export default function RowElement({movie, isLarge}) {
    const [clicked, setClicked] = useState([])

    const moviePressed = () => {

        localStorage.setItem('pressed', movie.name)
    }  

  return (
    <div>
        <div className='movie_container' onClick={moviePressed}>
            <img
            className={`movie ${isLarge && 'movie_large'}`}
            src={`https://image.tmdb.org/t/p/original/${
                isLarge ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt=''
                />
        </div>

    </div>
  )
}
