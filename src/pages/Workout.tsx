import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow, IonList, useIonViewWillEnter} from '@ionic/react';
import Menu from '../components/Menu'
import { updateCurrentExercises, removeAllExercises, completeExercises } from '../firebase';
import { useState } from "react";


const Workout: React.FC = () => {

  const [workout, setWorkout] = useState(<IonList></IonList>)
  useIonViewWillEnter(async () => {
    updateCurrentExercises(setWorkout)
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
            <IonTitle className='title'>Current Workout</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton onClick={(e) => removeAllExercises(setWorkout)}>Remove All Exercises</IonButton>
          <IonButton onClick={(e) => completeExercises(setWorkout)}>Complete All Exercises</IonButton>
          {workout}
        </IonContent>
      </IonPage>
    </>
    
  );
};

export default Workout;