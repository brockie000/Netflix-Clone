import React, { useEffect, useState } from 'react'
import requests from '../../Requests'
import Banner from '../../Components/Banner/Banner'
import Nav from '../../Components/NavBar/Nav'
import Row from '../../Components/Rows/Row'
import  './HomeScreen.css'

export default function HomeScreen() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
      const getMovie = () => {
        const movie = localStorage.getItem('pressed')

        if(movie){
          setMovie(movie)
        }
      }
      window.addEventListener('storage', getMovie)
  }, [])

  console.log('movie', movie)
  return (
    <div>
      <div>

      
      <Nav />
      
      <Banner />
      
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals} isLarge={true}/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLarge={false}/>

      </div>

      <div className='movie_popup'>
        <div>
        {movie}
        <img 
                className='nav_logo1'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                alt=""
            />
        </div>
      </div>
      
    </div>
  )
}
