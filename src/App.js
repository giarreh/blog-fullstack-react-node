import React from 'react';
import Blog from './components/blog';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <Navbar/>
      <Blog/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
