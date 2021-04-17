import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-eVFtyUbhMSVptzYBdfi7JyaBzJSP5aY",
  authDomain: "twitter-clone-d9ae6.firebaseapp.com",
  projectId: "twitter-clone-d9ae6",
  storageBucket: "twitter-clone-d9ae6.appspot.com",
  messagingSenderId: "271851700633",
  appId: "1:271851700633:web:2892110767cf073d439308",
  measurementId: "G-BY4SJWXRPS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
