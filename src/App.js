import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import {BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './Screens/Login/Login';
import {getAuth, onAuthStateChanged} from 'firebase/auth'

function App() {
  const user = null


  useEffect(() => {
    const auth = getAuth()
     const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if(userAuth){
        console.log('tetsttt', userAuth)
      }else{

      }
      
    })

    return unsubscribe;
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
      {!user ? (<Login />) : (
        <Routes>
          <Route path='/' element={<HomeScreen />}/>
        </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
