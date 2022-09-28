import React, { useState } from 'react'
import './Login.css'
import Landing from './Landing'
import SignIn from './SignIn'

export default function Login() {
  const [signIn, setSignIn] = useState(false)

  const Page = () => {
    <div>
    <h1>Unlimited films, TV programmes and more.</h1>
    <h2>Watch anywhere. Cancel at any time</h2>
    <h3>Ready to watch? Enter your email to create or restart your membership</h3>

    <div className='login_input'>
        <form>
          <input type='email' placeholder='Email Address'/>
          <button className='login_button1'>GET STARTED</button>
        </form>
    </div>
    </div>
  }
  console.log(signIn)

  return (
    <div className='login'>
      <div className='login_background'>
        <img 
        className='login_logo'
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        alt=''
        />
        <button className='login_button' onClick={() => setSignIn(true)}>Sign In</button>

        <div className='login_gradient' />

        </div>
        

        <div className='login_body'>
        {(signIn === false) ?  (<Landing />) : (<SignIn />)  }

        </div>
        
    </div>
  )
}
