import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCAEeanvRUWy47bArQPjxrI_OvdOoMnUYw",
  authDomain: "wily-app-32959.firebaseapp.com",
  databaseURL: "https://wily-app-32959.firebaseio.com",
  projectId: "wily-app-32959",
  storageBucket: "wily-app-32959.appspot.com",
  messagingSenderId: "378664587584",
  appId: "1:378664587584:web:cbb87733e82628336eeaa5"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
