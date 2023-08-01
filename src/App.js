import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Residence from './pages/residence/Residence';
import City from './pages/City';
import District from './pages/District';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/residences" element={<Residence />}></Route>
        <Route path="/ville" element={<City />}></Route>
        <Route path="/quartier" element={<District />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
