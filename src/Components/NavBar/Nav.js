import React, { useEffect, useState } from 'react'
import "./Nav.css"

export default function Nav() {
    const [show, handleShow] = useState(false)

    const transition = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", transition)
      return () => window.removeEventListener('scroll', transition)
    
    }, [])
    
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className='nav_contents'>
            <img 
                className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                alt=""
            />

            <img 
                className='nav_avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt=""
            />
        </div>
    </div>
  )
}
