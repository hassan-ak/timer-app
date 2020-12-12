// Imports
// Firebase SDK imports
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

// Firebase initialaization
firebase.initializeApp({
    apiKey: "AIzaSyAuPewYIAtFffnybyC1X1AB57G0lE9c0QA",
    authDomain: "project07b-hassanalikhan.firebaseapp.com",
    projectId: "project07b-hassanalikhan",
    storageBucket: "project07b-hassanalikhan.appspot.com",
    messagingSenderId: "423417014247",
    appId: "1:423417014247:web:7e274afd3c9d0a6f317f42"

})

// Messaging call
firebase.messaging(); 