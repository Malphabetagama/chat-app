import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyDZ8eT0TYVDvVHdVQhIve4Cq-ZxI7ArHj8",
    authDomain: "chat-web-app-e5515.firebaseapp.com",
    databaseURL: "https://chat-web-app-e5515-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-e5515",
    storageBucket: "chat-web-app-e5515.appspot.com",
    messagingSenderId: "35353350757",
    appId: "1:35353350757:web:1d7db6b1a9555eebbaec8c"
  };


  const app = firebase.initializeApp(config);