import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './components/Services/Contact';
import DemoProduct from './pages/DemoProduct';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Php from './components/Services/Php';
import 'bootstrap/dist/css/bootstrap.min.css';
import Android from './components/Services/Android';
import ContentWriting from './components/Services/ContentWriting';
import DigitalMarketing from './components/Services/DigitalMarketing';
import IOS from './components/Services/IOS';
import Laravel from './components/Services/Laravel';
import Python from './components/Services/Python';
import Ruby from './components/Services/Ruby';
import SocialMedia from './components/Services/SocialMedia';
import UIUX from './components/Services/UIUX';
import WebDeveloper from './components/Services/WebDeveloper';
import WordPress from './components/Services/WordPress';
import HospitalManagementPage from './products/HospitalManagementPage';
import LabSystem from './products/LabSystem';
import MedicalBillingSystem from './products/MedicalBillingSystem';
import POS from './products/POS';
import POSDESKTOP from './products/POSDESKTOP';
import ReactPage from './components/Services/ReactPage';
import Flutter from './components/Services/Flutter';


function App() {
  
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("UNSI TECH");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/php" element={<Php/>} />
            <Route path="/Android" element={<Android/>} />
            <Route path="/contentwriting" element={<ContentWriting/>} />
            <Route path="/digitalmarketing" element={<DigitalMarketing/>} />
            <Route path="/ios" element={<IOS/>} />
            <Route path="/laravel" element={<Laravel/>} />
            <Route path="/python" element={<Python/>} />
            <Route path="/ruby" element={<Ruby/>} />
            <Route path="/socialmedia" element={<SocialMedia/>} />
            <Route path="/uiux" element={<UIUX/>} />
            <Route path="/webdeveloper" element={<WebDeveloper/>} />
            <Route path="/wordpress" element={<WordPress/>} />
            <Route path="/hospital" element={<HospitalManagementPage  />} />
            <Route path="/lab" element={<LabSystem  />} />
            <Route path="/medical" element={<MedicalBillingSystem  />} />
            <Route path="/pos" element={<POS  />} />
            <Route path="/posdes" element={<POSDESKTOP  />} />
            <Route path="/react" element={<ReactPage  />} />
            <Route path="/flutter" element={<Flutter  />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
