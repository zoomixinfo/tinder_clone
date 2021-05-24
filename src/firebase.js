// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDboske7WRxcG_i4VZeRH-CxKV0cXC5RBs",
  authDomain: "tinter-cca18.firebaseapp.com",
  projectId: "tinter-cca18",
  storageBucket: "tinter-cca18.appspot.com",
  messagingSenderId: "224824808418",
  appId: "1:224824808418:web:4b347ed666238c735a9fbb",
  measurementId: "G-MS9G5VXGVC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore()

export default database