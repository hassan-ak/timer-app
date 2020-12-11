// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/header/Header';
import { Timer } from './components/timer/Timer';
import Footer from './components/footer/Footer';
// Styles Import
import './App.css';

// App function
function App() {
  return (
    <div>
      <Header/>
        <div className="conatiner">
          <Timer/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
