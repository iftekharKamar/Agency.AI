import { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';

function App() {

  const [theme,setTheme]=useState("light")

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
    </div>
  );
}

export default App;

