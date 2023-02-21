import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Login from './pages/LoginPage';
import Main from './pages/Main';
import Search from './pages/Search';
import History from './pages/History';
import Questionnaire from './pages/Questionnaire';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/LoginPage" component={Login}/>
        <Route exact path="/Questionnaire" component={Questionnaire}/>
        <Route exact path="/Main" component={Main}/>
        <Route exact path="/Search" component={Search}/>
        <Route exact path="/History" component={History}/>
        <Route exact path="/">
          <Redirect to="/LoginPage" />
        </Route>
      </IonRouterOutlet>
        
    </IonReactRouter>
  </IonApp>
);

export default App;
