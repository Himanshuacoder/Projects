import './App.css';
import 'bootstrap/dist/css/bootstrap.css';  //bootstrap through npm
import "bootstrap/dist/js/bootstrap.bundle";
import "./assets/css/Body.css";
import "./assets/css/style.css";



import React, { useState } from 'react'

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Signup } from './components/Signup';
import { Home } from './components/Home';

function App() {
  const [mode, setmode] = useState('light') //whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div className="App">
      <Header home='Home' about= 'About Us' mode={mode} toggleMode={toggleMode}/>
      <Home mode={mode}/>
      <Contact mode={mode}/>
      <About mode={mode}/>
      <Signup mode={mode}/>
      <Footer mode={mode}/>
    </div>
  );
}

export default App;
