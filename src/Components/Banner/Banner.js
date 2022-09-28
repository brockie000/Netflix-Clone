import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import requests from '../../Requests'

export default function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(requests.fetchNetflixOriginals)
            setMovie(req.data.results[0])
        }
        fetchData()
    }, [])


    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n -1) + '...' : string

    }

  return (
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center'
    }}>
        <div className='banner_contents '>
            <h1 className='banner_title'>{movie?.name || movie?.title || movie?.original_name}</h1>
            <div className='bannr_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>
                {truncate(`${movie?.overview}`, 150)}
            </h1>

        </div>

        <div className='banner--fadeBottom' />
        
    </header>
  )
}
