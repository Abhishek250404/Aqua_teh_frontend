import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Landingpage from '../Landingpage/Landingpage'
import { Routes, Route } from 'react-router-dom';
import Waterpage from '../Waterpage/Waterpage';

function Approutes() {
    return (
       <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/knowyourwater" element={<Waterpage />} />
      </Routes>
    )
}
export default Approutes