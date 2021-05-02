import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const firestore = firebase.firestore();
const storage = firebase.storage();

if (typeof window !== 'undefined' && window.location.hostname === "localhost") {
    firestore.useEmulator("localhost", 8080);
}

function dataToJSON(doc: firebase.firestore.QueryDocumentSnapshot) {
    const data = doc.data();
    return {
        ...data,
        createdAt: data.createdAt.toMillis(),
        updatedAt: data.updatedAt.toMillis(),
    }
}

export { auth, googleAuthProvider, firestore, storage, dataToJSON };
