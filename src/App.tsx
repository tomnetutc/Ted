import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import TravelPurpose from './Pages/TravelPurpose';
import TravelMode from './Pages/TravelMode';
import {Home} from './Pages/Home';
import {About} from './Pages/About';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tmd" element={<Home />} />
        <Route path="/tmd/about" element={<About />} />
        <Route path="/tmd/travelpurpose" element={<TravelPurpose />} />
        <Route path="/tmd/travelmode" element={<TravelMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;