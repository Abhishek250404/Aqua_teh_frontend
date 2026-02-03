import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Landingpage from '../Landingpage/Landingpage'
import { Routes, Route } from 'react-router-dom';
import Waterpage from '../Waterpage/Waterpage';
import Contact from '../Contactpage/Contact';
import FloatingActions from '../FloatingActions/FloatingActions';
import Aboutpage from '../Aboutpage/Aboutpage';

function Approutes() {
  return (
    <>
      <FloatingActions />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/knowyourwater" element={<Waterpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </>
  )
}
export default Approutes