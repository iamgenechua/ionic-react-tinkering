import React from 'react';
import { IonApp, IonLoading } from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import AppPrivate from './AppPrivate';
import { Route, Switch, Redirect} from 'react-router-dom';
import Login from './pages/Login';
import {AuthContext, useAuthInit} from './auth';
import NotFound from './pages/NotFound';
import Register from './pages/Register';



const App: React.FC = () => {
  const {loading, auth} = useAuthInit();
  console.log(`Rendering App with auth`, auth);

  if (loading) {
    return <IonLoading isOpen />;
  }

  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
        <IonReactRouter>
            <Switch>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
                <Route path="/my">
                  <AppPrivate />
                </Route>
                <Redirect exact path="/" to="/my/home"/>
              <Route>
                <NotFound />
              </Route>
            </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
  </IonApp>
  );
};

export default App;
