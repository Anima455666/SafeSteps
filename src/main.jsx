import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import PeriodTracking from './pages/PeriodTracking.jsx';
import MaternityTracking from './pages/MaternityTracking.jsx';
import SexEducation from './pages/SexEducation.jsx';
import SexEducationContent from './pages/SexEducationContent.jsx';
import PremiumPage from './pages/PremiumPage.jsx';
import Login from './pages/Login.jsx';
import Payment from './pages/Payment.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/period-tracking" element={<PeriodTracking />} />
        <Route path="/maternity-tracking" element={<MaternityTracking />} />
        <Route path="/sex-education" element={<SexEducation />} />
        <Route path="/sex-education/:ageGroup" element={<SexEducationContent />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  </StrictMode>
);