import React, { useEffect } from 'react';
import './App.css';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Reset from './components/Reset/Reset';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.userProfile.user)
  let navigate = useNavigate();

  useEffect(() => {
   if(!user) navigate(`/`);
   if(user) navigate(`/homepage`);
  }, [])

/*   useEffect(() => {
    console.log(window.location.pathname)
    window.localStorage.setItem('path', window.location.pathname);
    if(user) navigate(window.localStorage.getItem('path'));
  }, [window.location.pathname]); */

  return (

    <div className="app">
    <Routes>

      {user?
      <>
      <Route path="homepage" element={<HomePage />}/>
      </>
      : <Route path="/" element={<Login />} />
     }
           <Route path="dashboard" element={<Dashboard />}/>
           <Route path="reset" element={<Reset />}/>

         </Routes>

    </div>

  );
}

export default App;
