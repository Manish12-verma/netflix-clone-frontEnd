import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdoQMO65jrdRDDc3omoYT_xuLnjdft5og",
  authDomain: "netflix-clone-652e0.firebaseapp.com",
  projectId: "netflix-clone-652e0",
  storageBucket: "netflix-clone-652e0.appspot.com",
  messagingSenderId: "141535759866",
  appId: "1:141535759866:web:3fb07fbda2c1ddff71a843"
};   


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };