// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnt2zMaPTyyS4SSWBKzJmmLY_uvpZmXGI',
  authDomain: 'realtor-site-b52d4.firebaseapp.com',
  projectId: 'realtor-site-b52d4',
  storageBucket: 'realtor-site-b52d4.appspot.com',
  messagingSenderId: '38377470456',
  appId: '1:38377470456:web:bdf2341b362aa13feabe0d',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
