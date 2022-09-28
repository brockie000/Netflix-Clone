import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import {BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Login from './Screens/Login/Login';

function App() {
  const user = null
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
