
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Agriculture from './components/pages/Agriculture';
import LandscapeSupplies from './components/pages/LandscapeSupplies';
import AnimalBedding from './components/pages/AnimalBedding';
import Contact from './components/pages/Contact';



function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home/>} />
          <Route path='/agriculture' exact element={<Agriculture/>} />
          <Route path='/landscape-supplies' exact element={<LandscapeSupplies/>} />
          <Route path='/animal-bedding' exact element={<AnimalBedding/>} />
          <Route path='/contact' exact element={<Contact/>} />
         
        </Routes>
      </Router>

    </React.Fragment>
  );
}

export default App;
