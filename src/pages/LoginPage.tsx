import React from "react";
import { Redirect, Route, useHistory } from 'react-router-dom';
import './LoginPage.css';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonFooter,
    IonGrid,
    IonRow,
    IonCol,
    setupIonicReact
  } from '@ionic/react';

import { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput,IonButton,IonText} from '@ionic/react';
import {login,registerUser} from '../firebase';



const Login: React.FC = () => {
interface LoginData
{
    username:string;
  
}
const [username, setUsername] = useState<LoginData | null>(null);
const [password, setPassword] = useState<LoginData | null>(null);
const history = useHistory();
  

return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='center'>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 className='center'>Welcome to GoFit</h1>
        <IonItem>
          <IonInput className="email"  
            type = "text"
            onIonChange= {(username:any) => setUsername(username.detail.value)} 
            name = "username" 
            placeholder="Enter Email">
          </IonInput>
        </IonItem>
        <IonItem>
          <IonInput className="center"
            type = "password"
            onIonChange= {(password:any) => setPassword(password.detail.value)} 
            name = "password" 
            placeholder="Enter password">
          </IonInput>
        </IonItem>


        <IonGrid fixed={true}>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size='auto'>
              <IonButton
                onClick = {(e) => {login(username, password, history)}}
                >Login</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size = 'auto'>
              <IonButton
                onClick = {(e) => {registerUser(username,password, history)}}
                >Sign Up</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonFooter>
      </IonFooter>

    </IonPage>
);
};

export default Login;
