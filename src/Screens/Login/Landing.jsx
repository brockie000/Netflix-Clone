import React from 'react'
import "./Login.css"

export default function Landing() {
  return (
    <div className='log_page'>
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
  )
}
