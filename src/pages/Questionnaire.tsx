import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButton, IonButtons, IonTabs, IonTabBar, IonTabButton,
    IonMenuButton, IonMenu, IonMenuToggle, IonGrid, IonRow, IonItem, IonLabel, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle} from '@ionic/react';
import Menu from '../components/Menu'
import {addQuestionnaireInfo} from '../firebase';
import { useState } from 'react';
interface Data
{
    data:string;
  
}
const Questionnaire: React.FC = () => {
  const [name, setName] = useState<Data| null>(null)
  const [age, setAge] = useState<Data | null>(null)
  const [height, setHeight] = useState<Data | null>(null)
  const [weight, setWeight] = useState<Data | null>(null)
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
                        <IonInput className = "username" name = "Name" type = "text" placeholder="What is your Name?"
                        onIonChange= {(username:any) => setName(username.detail.value)} >
                        </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="light" >Age</IonLabel>
                        <IonInput className = "age" name = "age" type = "text" placeholder="What is your age?"
                        onIonChange= {(age:any) => setAge(age.detail.value)} >
                        </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="light" >Weight</IonLabel>
                        <IonInput className = "weight" name = "weight" type = "text" placeholder="What is your weight?"
                        onIonChange= {(weight:any) => setWeight(weight.detail.value)} >

                        </IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel color="light" >Height</IonLabel>
                        <IonInput className = "height" name = "height" type = "text" placeholder="What is your Height?"
                        onIonChange= {(height:any) => setHeight(height.detail.value)} 
                        >
                        </IonInput>
                </IonItem>
                <IonButton routerLink = "/Main"
                onClick = {(e) => {addQuestionnaireInfo(name,age,height,weight)}}
                >Submit</IonButton>
            </IonCard>
          </IonContent>

        </IonPage>
      </>




    );
};

export default Questionnaire;