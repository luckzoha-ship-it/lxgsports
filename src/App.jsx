import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PartnerModal from './components/PartnerModal';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EventManagementPage from './pages/EventManagementPage';

function App() {
  const dialogRef = useRef(null);

  const openPartnerModal = () => {
    dialogRef.current?.showModal();
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-bg text-gray-100 font-sans antialiased selection:bg-brand-red selection:text-white">
        {/* Navigation */}
        <Navbar onOpenPartnerModal={openPartnerModal} />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage onOpenPartnerModal={openPartnerModal} />} />
            <Route path="/about" element={<AboutPage onOpenPartnerModal={openPartnerModal} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/event-management" element={<EventManagementPage onOpenPartnerModal={openPartnerModal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenPartnerModal={openPartnerModal} />

        {/* Partner Dialog Modal */}
        <PartnerModal dialogRef={dialogRef} />
      </div>
    </Router>
  );
}

export default App;
