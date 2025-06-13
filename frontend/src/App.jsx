// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProviderList from "./components/Providers";
import ProviderDetail from "./components/ProvidersDetails";

function App() {
    return (
    <div className = 'w-full h-full'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/providers/:id" element={<ProviderDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
