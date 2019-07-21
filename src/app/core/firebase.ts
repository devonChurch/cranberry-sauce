// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpNkS1eC3yOm7XLIy1PKfVfmbO_AMWP6w",
  authDomain: "cranberry-sauce.firebaseapp.com",
  databaseURL: "https://cranberry-sauce.firebaseio.com",
  projectId: "cranberry-sauce",
  storageBucket: "",
  messagingSenderId: "172088342286",
  appId: "1:172088342286:web:65b70042c2786214"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
