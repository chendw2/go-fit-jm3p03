// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {Router, useHistory} from "react-router";
import {useEffect, useState} from "react";
import { collection, addDoc, getDocs, doc, getDoc,setDoc } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFopyvUlVx8D08lwrlO2P-QrDqhZNydik",
  authDomain: "go-fit-82bb9.firebaseapp.com",
  projectId: "go-fit-82bb9",
  storageBucket: "go-fit-82bb9.appspot.com",
  messagingSenderId: "339580888987",
  appId: "1:339580888987:web:32da4a9b074ce300d4a33e",
  measurementId: "G-WGT05KEB7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const login = async(username:any) => 
{
    const data =
    {
        height:5,
        weight:69,
        age:420
    }
    await setDoc(doc(db,"Users",username),data);
}

export {login};