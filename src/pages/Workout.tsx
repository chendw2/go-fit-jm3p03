import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow } from '@ionic/react';
import Menu from '../components/Menu'

const Workout: React.FC = () => {
    return (
      <>
        <Menu/>
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle className='title'>Current Workout</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            Something Something GoFit
          </IonContent>
        </IonPage>
      </>
      
    );
};

export default Workout;