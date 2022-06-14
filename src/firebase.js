import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB0raRXfG3DP4I62dwmcyW04_uLBe-_StQ",
    authDomain: "disneyplus-clone-adfb6.firebaseapp.com",
    projectId: "disneyplus-clone-adfb6",
    storageBucket: "disneyplus-clone-adfb6.appspot.com",
    messagingSenderId: "431464823162",
    appId: "1:431464823162:web:4bf5b570322b17b4c77ec3",
    measurementId: "G-37XMEZBTRP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;