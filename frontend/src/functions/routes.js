import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from "../App";


import HomePage from '../pages/Home';


const ConfigRoutes = () => {
  return (
    <>
        <Routes> 
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
        
        </Routes>
    </>
  )
}

export default ConfigRoutes