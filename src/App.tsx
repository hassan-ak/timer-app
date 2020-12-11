// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/header/Header';
import { Body } from './components/body/Body';
import Footer from './components/footer/Footer';
// Styles Import
import './App.css';

// App function
function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
