import "tailwindcss";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from "./pages/user/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listing from "./pages/user/listing";
import Order from "./pages/user/order";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
