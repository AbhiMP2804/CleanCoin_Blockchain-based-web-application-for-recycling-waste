import firebase from "firebase";
 
  var firebaseConfig = {
    apiKey: "AIzaSyABjQQUUFkDOsr-jcArpdq51p0J8f_Mqe8",
    authDomain: "ethwallet-daf73.firebaseapp.com",
    projectId: "ethwallet-daf73",
    storageBucket: "ethwallet-daf73.appspot.com",
    messagingSenderId: "11642202238",
    appId: "1:11642202238:web:621ee1d595c09a232d102f",
    measurementId: "G-TEC37ML3G0"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  const db = fire.firestore();
  const auth = firebase.auth();
 const storage = firebase.storage();
 //const createStripeCheckout = firebase.functions().httpsCallable('createStripeCheckout');
 //const stripe = Stripe('pk_test_51HJxUGHdPJgkhyQUTQrNuT5hNHniSH84OuvVCLYFpWWjZUtrlmluyueuAxLLATfIeRHqbAhGb5WxEkAewABwT8cF003Mw1N0nH');

  export {db,auth,storage} ;
  export default fire;