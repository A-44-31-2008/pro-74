import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAiFbuVuqYCHJWXXRnmQeG61e95okTpI44",
  authDomain: "bizxcvbn.firebaseapp.com",
  projectId: "bizxcvbn",
  storageBucket: "bizxcvbn.appspot.com",
  messagingSenderId: "718607299317",
  appId: "1:718607299317:web:d39d9d72a3716541e98bbc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
