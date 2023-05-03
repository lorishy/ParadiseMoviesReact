import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Views/HomePage';
import VodPage from './Views/VodPage';
import CinemaPage from './Views/CinemaPage';
import LoginPage from './Views/LoginPage';
import RegisterPage from './Views/RegisterPage';
import VodPortailPage from './Views/VodPortailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cinema" element={<CinemaPage />} />
        <Route path="/vodportail" element={<VodPortailPage />} />
        <Route path="/vod" element={<VodPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
