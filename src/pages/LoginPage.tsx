import React from "react";
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
return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='header'>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1 className='header'>Welcome to GoFit</h1>
        <IonItem>
          <IonInput className="username"  
            type = "text"
            onIonChange= {(username:any) => setUsername(username.detail.value)} 
            name = "username" 
            placeholder="Enter username">
          </IonInput>
        </IonItem>
        <IonItem>
          <IonInput className="password"
            type = "text"
            onIonChange= {(password:any) => setPassword(password.detail.value)} 
            name = "password" 
            placeholder="Enter password">
          </IonInput>
        </IonItem>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton routerLink = "/Main"
                onClick = {(e) => {login(username,password)}}
                >Login</IonButton>
                <IonButton routerLink = "/Questionnaire"
                onClick = {(e) => {registerUser(username,password)}}
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
