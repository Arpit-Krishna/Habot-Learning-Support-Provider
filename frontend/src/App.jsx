// import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProviderList from "./components/Providers";
import ProviderDetail from "./components/ProvidersDetails";
import NotFound from "./components/NotFound";
// import About from "./components/About";

function App() {
  return (
    <div className="w-full h-auto bg-[#0C1B30] transition-colors duration-300">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/providers/:id" element={<ProviderDetail />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/pnf" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
