import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // Importa useState si es necesario
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Inicio from './components/Inicio';
import Acerca from './components/Acerca';
import './components/color-modes';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/acerca" element={<Acerca />} />
            {/* Agrega más rutas según sea necesario */}
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
