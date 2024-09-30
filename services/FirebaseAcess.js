// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import firebaseConfig from "./FirebaseConfig.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const dbFirestore = getFirestore(app);

const alunosCollection = collection(dbFirestore, 'alunos');

export {alunosCollection, dbFirestore};
//export {dbFirestore};


