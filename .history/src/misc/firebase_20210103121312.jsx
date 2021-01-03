import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

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
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('us-central1');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useEmulator('localhost', 5001);
}