import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow, IonItem, IonLabel, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle} from '@ionic/react';
import Menu from '../components/Menu'

const Questionnaire: React.FC = () => {
    return (
      <>
        <Menu/>
        <IonPage id="main-content">

          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle className='title'>User Questionnaire</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonCard>

                <IonItem>
                    <IonLabel color="light" >Name</IonLabel>
                        <IonInput placeholder="What is your Name?"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="light" >Age</IonLabel>
                        <IonInput placeholder="What is your age?"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="light" >Weight</IonLabel>
                        <IonInput placeholder="What is your weight?"></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="light" >Height</IonLabel>
                        <IonInput placeholder="What is your Height?"></IonInput>
                </IonItem>


            </IonCard>
          </IonContent>

        </IonPage>
      </>




    );
};

export default Questionnaire;