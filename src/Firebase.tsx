// Imports
// Firebase Imports
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/messaging';   // for cloud messaging

// Firebase Configrations
const config = {
    apiKey: "AIzaSyAuPewYIAtFffnybyC1X1AB57G0lE9c0QA",
    authDomain: "project07b-hassanalikhan.firebaseapp.com",
    projectId: "project07b-hassanalikhan",
    storageBucket: "project07b-hassanalikhan.appspot.com",
    messagingSenderId: "423417014247",
    appId: "1:423417014247:web:7e274afd3c9d0a6f317f42"
}

// App initilization
firebase.initializeApp(config)

// Function export
export default firebase;