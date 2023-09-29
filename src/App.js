import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import About from './components/pages/About';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/free-trial' element={<About />} />
          <Route path='/courses' />
          <Route path='/contact' />
          <Route path='/freetrial' />
          <Route path='/sign-up' />

        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
