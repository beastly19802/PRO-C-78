import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAWMkiMq5iSquCFfTZ9GxKdxTYxJtTOwzo",
    authDomain: "bartersystem-496b7.firebaseapp.com",
    projectId: "bartersystem-496b7",
    storageBucket: "bartersystem-496b7.appspot.com",
    messagingSenderId: "447025723014",
    appId: "1:447025723014:web:d38d908b7fdd8f8fb78307"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.firestore