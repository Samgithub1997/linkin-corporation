import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiWN9zQBQBAMx46qgovW2zcqmwF5Cbz9s",
    authDomain: "linkin-corporate.firebaseapp.com",
    projectId: "linkin-corporate",
    storageBucket: "linkin-corporate.appspot.com",
    messagingSenderId: "473368137355",
    appId: "1:473368137355:web:af077937f3597a5f730e8e",
    measurementId: "G-MBWFTVET73"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {db, auth};