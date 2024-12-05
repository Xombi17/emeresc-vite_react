import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuthModal } from './components/AuthModal';
import { SOSPage } from './pages/SOS';
import { HospitalsPage } from './pages/Hospitals';
import { CalculatorPage } from './pages/Calculator';
import { SchemesPage } from './pages/Schemes';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/sos" element={<SOSPage />} />
            <Route path="/hospitals" element={<HospitalsPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/schemes" element={<SchemesPage />} />
          </Routes>
        </div>
        
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          mode={authMode}
          onToggleMode={() => setAuthMode(mode => mode === 'signin' ? 'signup' : 'signin')}
        />
      </div>
    </Router>
  );
}

export default App;