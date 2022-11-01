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

function App() {
  let navigate = useNavigate();

  const user = null;
  useEffect(() => {
   //if(!user) navigate(`/login`);
  }, [])

  return (

    <div className="app">
    <Routes>

      {user?
      <>
      <Route path="homepage" element={<HomePage />}/>
      </>
      : <Route path="/" element={<Login />}/>
     }
           <Route path="dashboard" element={<Dashboard />}/>
           <Route path="reset" element={<Reset />}/>

         </Routes>

    </div>

  );
}

export default App;
