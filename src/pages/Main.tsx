import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow, IonList, useIonViewWillEnter, RefresherEventDetail} from '@ionic/react';
import './Main.css';
import { useState } from "react";
import { displayRecommendation } from '../firebase';
import Menu from '../components/Menu'

const Main: React.FC = () => {

  const [text, setText] = useState(<p></p>)
  const [rec, setRec] = useState(<IonList></IonList>)
  useIonViewWillEnter(async () => {
    setTimeout(() => {
      displayRecommendation(setRec, setText)
    }, 500) 
  })

  

  return (
    <>
      <Menu/>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle className='title'>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {text}
          {rec}
        </IonContent>
      </IonPage>
    </>
    
  );
};

export default Main;