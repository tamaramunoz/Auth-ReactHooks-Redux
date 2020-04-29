import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCSlB4d6143NG_m3qFk2bka-bO6lQS1EJg",
    authDomain: "auth-redux-abf77.firebaseapp.com",
    databaseURL: "https://auth-redux-abf77.firebaseio.com",
    projectId: "auth-redux-abf77",
    storageBucket: "auth-redux-abf77.appspot.com",
    messagingSenderId: "772430051059",
    appId: "1:772430051059:web:3f805057d7b399011ea986"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export { auth, firebase, db, storage }
