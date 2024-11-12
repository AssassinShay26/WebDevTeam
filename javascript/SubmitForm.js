// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdsoABuRCRv1-kW2-pGZBYo1SEeCXwQ54",
  authDomain: "webdevteam-1c9be.firebaseapp.com",
  projectId: "webdevteam-1c9be",
  storageBucket: "webdevteam-1c9be.firebasestorage.app",
  messagingSenderId: "7540365239",
  appId: "1:7540365239:web:48f684b769ffb6e6067a32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function SubmitForm(){
    document.getElementById("SumbitForm").submit();
}