import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow, IonList} from '@ionic/react';
import Menu from '../components/Menu'
import { updateCurrentExercises, removeAllExercises } from '../firebase';
import { useState } from "react";


const Workout: React.FC = () => {

  const [workout, setWorkout] = useState(<IonList></IonList>)

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
          <IonButton onClick={(e) => updateCurrentExercises(setWorkout)}>REFRESH</IonButton>
          <IonButton onClick={(e) => removeAllExercises()}>Remove All Exercises</IonButton>
          <IonButton>Complete All Exercises</IonButton>
          {workout}
        </IonContent>
      </IonPage>
    </>
    
  );
};

export default Workout;