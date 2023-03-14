import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow, IonList, useIonViewWillEnter} from '@ionic/react';
import Menu from '../components/Menu'
import { useState } from "react";
import { updateHistory } from '../firebase';

const History: React.FC = () => {

  const [history, setHistory] = useState(<IonList></IonList>)
  useIonViewWillEnter(async () => {
    updateHistory(setHistory)
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
              <IonTitle className='title'>Exercise History</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {history}
          </IonContent>
        </IonPage>
      </>
      
    );
};

export default History;