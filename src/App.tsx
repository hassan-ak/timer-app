// Imports
// React Imports
import React from 'react';
// Firebase imports
import firebase from "./Firebase";
// Component Imports
import Header from './components/header/Header';
import { Timer } from './components/timer/Timer';
import Footer from './components/footer/Footer';
// Styles Import
import './App.css';

// App function
function App() {
  // Console token if notifactions allowed
  // This token to be used for testing of push notification
  const messaging = firebase.messaging();
    messaging.requestPermission().then(()=>{
        return messaging.getToken()
    }).then((token)=>{
        console.log('token :',token)
    })
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
