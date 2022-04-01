import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAYHI5We6iJrkrSWxMUl2gJ3Nb9kE3YW1A",
    authDomain: "eride-63b96.firebaseapp.com",
    projectId: "eride-63b96",
    storageBucket: "eride-63b96.appspot.com",
    messagingSenderId: "529355856261",
    appId: "1:529355856261:web:9ad3220e8bf60d23a98cec"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
