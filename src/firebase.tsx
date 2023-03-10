// Import the functions you need from the SDKs you need
import { Redirect, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {Router, useHistory} from "react-router";
import {useEffect, useState,useContext} from "react";
import { collection, addDoc, getDocs, doc, getDoc,setDoc, collectionGroup, query, where, startAt, orderBy, endAt, limit} from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import {IonList, IonButton, IonCard, IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol} from '@ionic/react'
import { getDatabase, ref, onValue} from "firebase/database";
import "./firebase.css";


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
const auth = getAuth(app);


const registerUser = async(email:any,password:any, history:any) => 
{
  const res = await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  const user = userCredential.user;
  history.push("/Questionnaire");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });

}

const login = async(email:any,password:any, history:any) => 
{
  try{
    await signInWithEmailAndPassword(auth,email,password);
    history.push("/Main");
  }
  catch(err:any){
    console.error(err);
    alert(err.message);

  }
}
const addQuestionnaireInfo = async(name:any,age:any,weight:any,height:any,equipmentList:any,bodyPartList:any) =>
{
  try{
    const username = auth.currentUser?.email;
    if (!name)
    {
      alert("Please input a name");
    }
    if (!age)
    {
      alert("Please input an age")
    }
    if (!weight)
    {
      alert("Please input a weight")
    }
    if (!height)
    {
      alert("Please input a height")
    }
    /*Not sure if we need to force users to input at least one equipment & body part
    if (!equipmentList)
    {
      alert("Nothing was found in your Equipment List")
    }
    if (!bodyPartList)
    {
      alert("Nothing was found in your Body Part List")
    }
    */
    if (username)
    {
      const data = 
      {
        name:name,
        age:age,
        weight:weight,
        height:height,
        currentExercises:new Array(0),
        history:new Array(0),
        equipmentList:equipmentList,
        bodyPartList:bodyPartList
      }
      await setDoc(doc(db,"Users",username),data);
      await setInitialExercises();
    }
    else{
      alert(
        "User not found"
      )
    }
  }
  catch(err:any)
  {
    console.error(err);
    alert(err.message);
  }

}

const signOut = async(history:any) => 
{
  auth.signOut()
  .then(()=>{
    history.push("/LoginPage");
  })
  .catch((error) => {
    alert(error.message);
  })
}

const addExercise = async(exercise:any) =>
{
  try{
    const username = String(auth.currentUser?.email);
    const a = doc(db, "Users", username)
    const l = await(getDoc(a))

    if (l.exists()) {
      const data =
      {
        currentExercises: l.data().currentExercises
      }

      const contains = data.currentExercises.some((element:any) => {
        if (element.name === exercise.name) {
          return true;
        }
        return false;
      })
      if (contains) {
        alert("Exercise already added")
      } else if (Object.keys(data.currentExercises).length == 10) {
        alert("Can't exceed more than 10 exercises at a time")
      } else {
        data.currentExercises.push(exercise)
        await setDoc(doc(db,"Users",username), data, {merge: true});
      }
    }
    else{
      alert(
        "User not found"
      )
    }
  }
  catch(err:any)
  {
    console.error(err);
    alert(err.message);
  }
}


const removeExercise = async(exercise:any) => 
{
  try{
    const username = String(auth.currentUser?.email);
    const a = doc(db, "Users", username)
    const l = await(getDoc(a))

    if (l.exists()) {
      const old = l.data().currentExercises
      const result = new Array(0)
      old.some((item:any) => {
        if (item.name != exercise.name) {
          result.push(item)
        }
      })
      
      const data = 
      {
        currentExercises: result
      }
      await setDoc(doc(db,"Users",username), data, {merge: true});
    }
    else{
      alert(
        "User not found"
      )
    }
  }
  catch(err:any)
  {
    console.error(err);
    alert(err.message);
  }
}


const removeAllExercises = async() =>
{
  try{
    const username = String(auth.currentUser?.email);
    const a = doc(db, "Users", username)
    const l = await(getDoc(a))

    if (l.exists()) {
      const data = 
      {
        currentExercises: new Array(0)
      }
      await setDoc(doc(db,"Users",username), data, {merge: true});
    }
    else{
      alert(
        "User not found"
      )
    }
  }
  catch(err:any)
  {
    console.error(err);
    alert(err.message);
  }
}

const completeExercises = async() =>
{
  try{
    const username = String(auth.currentUser?.email);
    const a = doc(db, "Users", username)
    const l = await(getDoc(a))

    if (l.exists()) {
      var temp = l.data().currentExercises.reverse()
      temp = temp.concat(l.data().history)
      while (temp.length > 10) {
        temp.pop()
      }
      const data = 
      {
        history: temp,
      }
      await setDoc(doc(db,"Users",username), data, {merge: true});
      removeAllExercises()
    }
    else{
      alert(
        "User not found"
      )
    }
  }
  catch(err:any)
  {
    console.error(err);
    alert(err.message);
  }
}

const updateCurrentExercises = async(setWorkout:any) =>
{
  try{
    const username = String(auth.currentUser?.email);
    const a = doc(db, "Users", username)
    const l = await(getDoc(a))
    if (l.exists())
    {
      setWorkout(<IonList className="ion-padding"> {l.data().currentExercises.map((exercise:any) => (
        <IonCard>
          <IonGrid fixed={true}>
            <IonRow>
              <IonCardHeader className="card-header">{exercise.name}</IonCardHeader>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonRow className="card-text">Main Body Part: {exercise.bodyPart}</IonRow>
                <IonRow className="card-text">Required Equipment: {exercise.equipment}</IonRow>
                <IonRow className="card-text">Targeted Muscle: {exercise.target}</IonRow>
              </IonCol>
              <IonCol className="exercise-gif" size="auto">
                <img alt="Silhouette of mountains" src={exercise.gifUrl} width={125} height={125}></img>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol></IonCol>
              <IonCol size="auto">
                <IonButton onClick={(e) => removeExercise(exercise)}>Remove Exercise</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      ))}
      </IonList>)
    }
    else{
      alert(
        "User not found"
      )
    }
  }
  catch(err:any)
  {
    console.error(err);
    alert(err.message);
  }
}

const updateHistory = async(setHistory:any) =>
{
  try{
    const username = String(auth.currentUser?.email);
    const a = doc(db, "Users", username)
    const l = await(getDoc(a))
    if (l.exists())
    {
      setHistory(<IonList className="ion-padding"> {l.data().history.map((exercise:any) => (
        <IonCard>
          <IonCardHeader>Exercise: {exercise.name}</IonCardHeader>
          <IonCardContent>Targeted Muscle: {exercise.target}</IonCardContent>
        </IonCard>
      ))}
      </IonList>)
    }
    else{
      alert(
        "User not found"
      )
    }
  }
  catch(err:any)
  {
    console.error(err);
    alert(err.message);
  }
}



const search = async(input:String, result:any) =>
{
  if (input != ""){
    const q = query(collection(db, "Exercises"), orderBy("name"), startAt(input), endAt(input+"\uf8ff"), limit(15));
    const querySnapshot = await getDocs(q);
    //querySnapshot.forEach((doc) => {
      //console.log(doc.id, "=>", doc.data());
    //});
    result(<IonList className="ion-padding">{querySnapshot.docs.map((doc) => (
      <IonCard>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCardHeader className="card-header">{doc.data().name}</IonCardHeader>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonRow className="card-text">Main Body Part: {doc.data().bodyPart}</IonRow>
              <IonRow className="card-text">Required Equipment: {doc.data().equipment}</IonRow>
              <IonRow className="card-text">Targeted Muscle: {doc.data().target}</IonRow>
            </IonCol>
            <IonCol className="exercise-gif" size="auto">
              <img alt="Silhouette of mountains" src={doc.data().gifUrl} width={125} height={125}></img>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size="auto">
              <IonButton onClick = {(e) => {addExercise(doc.data())}}>Add Exercise</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    ))}

    </IonList>)
  }
}


const equipmentSearch = async(input:String, result:any) =>
{
  if (input != ""){



    
  }
}

const setInitialExercises = async() =>
{
  const username = String(auth.currentUser?.email);
  const r = doc(db, "Users", username);
  const userInfo = await(getDoc(r));
  if (userInfo.exists())
  {
      const bodyParts = userInfo.data().bodyPartList;
      const equipment = userInfo.data().equipmentList;
      const data = 
      {
        currentExercises:userInfo.data().currentExercises
      }
  
      for (var bodyPart of bodyParts)
      {
        const q = query(collection(db,"Exercises"),where("bodyPart","==",bodyPart));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) =>
          {
            if (Object.keys(data.currentExercises).length < 10)
            {
              data.currentExercises.push(doc.data());
            }
          }
        )
      }
      await setDoc(doc(db,"Users",username),data,{merge:true});
  }
  else{
    alert("Error occurred");
  }


}


export {login,registerUser,auth, addQuestionnaireInfo, equipmentSearch, signOut, search, updateCurrentExercises, removeAllExercises,
  completeExercises, updateHistory};