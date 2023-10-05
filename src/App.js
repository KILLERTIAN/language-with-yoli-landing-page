import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import About from './components/pages/About';
import ScrollToTop from './ScrollToTop';
import Thank from './components/pages/Thank';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/register' element={<About />} />
          <Route path='/thank-you' element={<Thank />} />

        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
