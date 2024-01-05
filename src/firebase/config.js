import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAOtuielHH3UzzkAGdqMyDveXJUwA3UXpo",
    authDomain: "financetracker-e8e7c.firebaseapp.com",
    projectId: "financetracker-e8e7c",
    storageBucket: "financetracker-e8e7c.appspot.com",
    messagingSenderId: "1041467456484",
    appId: "1:1041467456484:web:8e70688033675cb9af65f1"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }