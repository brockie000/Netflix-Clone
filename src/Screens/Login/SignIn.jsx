import React, { useRef } from 'react'
import { firebaseApp } from '../../firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

export default function SignIn() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null)
    
    const register = (e) => {
        e.preventDefault();
        const authentication = getAuth()

        createUserWithEmailAndPassword(
            authentication,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        })
        .catch((error => {
            alert(error.message)
        }))
    }

    const signIn = (e) => {
        e.preventDefault()
        const authentication = getAuth()

        signInWithEmailAndPassword(
            authentication,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        })
        .catch((error) => alert(error.message))


    }

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder='Email' type='email'/>
            <input ref={passwordRef} placeholder='Password' type='password'/>
            <button onClick={signIn}>Sign In</button>
        </form>

        <h4>
            <span className='span_gray'>New to Netflix?</span>
            <span className='span_white' onClick={register}>Sign up Now</span>
        </h4>

    </div>
  )
}
