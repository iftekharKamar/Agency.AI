import { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import { ContactUs } from './components/ContactUs';
import Footer from './components/Footer';

function App() {

  const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme==='dark'?'dark':''}>
     <Navbar theme={theme} setTheme={setTheme}></Navbar>
     <Hero/>
     <TrustedBy></TrustedBy>
     <Services/>
     <OurWork></OurWork>
     <Teams/>
     <ContactUs/>
     <Footer theme={theme}></Footer>
    </div>
  );
}

export default App;

