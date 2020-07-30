import React, { useState, useEffect } from 'react';
import { IonApp, IonLoading } from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import AppPrivate from './AppPrivate';
import { Route, Switch, Redirect} from 'react-router-dom';
import Login from './pages/Login';
import {AuthContext} from './auth';
import NotFound from './pages/NotFound';
import {auth} from './Firebase';



const App: React.FC = () => {

  //logging in function
  const [authState, setAuthState] = useState({loading: true, loggedIn: false});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthState({loading: false, loggedIn: Boolean(user)}); // when null, become false, else, true
    })
  }, []);

  console.log(`Rendering App with LoggedIn=${authState}`);

  if (authState.loading) {
    return <IonLoading isOpen />;
  }

  return (
    <IonApp>
      <AuthContext.Provider value={{loggedIn: authState.loggedIn}}>
        <IonReactRouter>
            <Switch>
                <Route exact path="/login">
                  <Login />
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
