import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "https://webdevteam-1c9be-default-rtdb.firebaseio.com";
// Import the functions you need from the SDKs you need
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


// function SubmitForm(){
//     document.getElementById("SumbitForm").submit();
// }
document.getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let fname = document.querySelector('#fname').value;
  let lname = document.querySelector('#lname').value;
  let subject = document.querySelector('#subject').value;
}
sendMessage(fname, lname, subject);
//Send Message to Firebase(4)
function sendMessage(fname, lname, subject) {
  const database = getDatabase();

  set(ref(database, 'users/' + Math.floor(Math.random() * 10000000)), {
    fname: fname,
    lname: lname,
    subject: subject,
  }).then(() => {
    //Show Alert Message(5)
    document.querySelector('.alert').style.display = 'block';
    //Hide Alert Message After Seven Seconds(6)
    setTimeout(function () {
      document.querySelector('.alert').style.display = 'none';
    }, 7000);
    document.getElementById('registrationform').reset();
  }).catch((error) => {
    alert(error)
  })
}