import React from 'react';
import {IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {home, settings} from 'ionicons/icons';
import {Redirect, Route} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import FirstEntry from './pages/FirstEntry';
import { useAuth } from './auth';


const AppPrivate: React.FC = () => {
  const {loggedIn} = useAuth();
  if (!loggedIn) {
    return <Redirect to="/login"/>
  }

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
            <Route exact path="/my/home">
              <Home />
            </Route>
            <Route exact path="/my/settings">
              <Settings />
            </Route>
            <Route exact path="/my/entries/:id">
              <FirstEntry />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/my/home">
              <IonIcon icon={home}></IonIcon>            
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/my/settings"> 
            <IonIcon icon={settings}></IonIcon>              
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  );
};

export default AppPrivate;
