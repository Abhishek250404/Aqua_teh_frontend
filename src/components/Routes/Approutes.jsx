import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Landingpage from '../Landingpage/Landingpage'
import { Routes, Route } from 'react-router-dom';
import Waterpage from '../Waterpage/Waterpage';
import Contact from '../Contactpage/Contact';
import FloatingActions from '../FloatingActions/FloatingActions';
import Aboutpage from '../Aboutpage/Aboutpage';
import Servicepage from '../Serivcepage/Servicepage';
import Productpage from '../Productpage/Productpage';

function Approutes() {
  return (
    <>
    <Navbar />
      <FloatingActions />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/knowyourwater" element={<Waterpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/service" element={<Servicepage />} />
        <Route path="/product" element={<Productpage />} />
      </Routes>
      <Footer/>
    </>
  )
}
export default Approutes