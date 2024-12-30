
import Hero from "./Components/Hero"
import Home from "./Components/Home"
import Header from "./Components/Header"
import { Outlet } from 'react-router-dom'
// sec file
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../src/Components/Login';
import Signup from '../src/Components/Signup';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import { UserProvider } from './UserContext';
import {BrowserRouter as Router } from 'react-router-dom';

// end
function App() {

  //sec file to check first that a user is logged in or not.
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const PrivateRoute = ({ element }) => {
  //   return isAuthenticated ? element : <Navigate to="/login" />
  // }
  //end


  return (
    

<div className='bg-bgcolor'>
<div className="App">
      {/* <RefrshHandler setIsAuthenticated={setIsAuthenticated} /> */}
      <UserProvider>
        
      <Header/>
      <div className="text-gray-500 bg-bgcolor max-w-md mx-auto px-10 overflow-hidden md:max-w-4xl lg:max-w-6xl">
      <Outlet/>
      </div>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes> */}
      
      </UserProvider>
    </div>
      
    </div>
  )
}

export default App
