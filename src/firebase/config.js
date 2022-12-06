// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3OoNjl4lCp0NYnukXfq_HascAnHikSU0",
  authDomain: "rock-y-toque.firebaseapp.com",
  projectId: "rock-y-toque",
  storageBucket: "rock-y-toque.appspot.com",
  messagingSenderId: "6056383714",
  appId: "1:6056383714:web:ac826204b3987069abfabb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  }else{
    
  }
})

export {auth}