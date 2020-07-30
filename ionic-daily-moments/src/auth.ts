import React, { useContext, useEffect, useState } from 'react';
import {auth as fireBaseAuth} from './Firebase';

interface Auth {
    loggedIn: boolean;
    userId?: string;
}

interface AuthInit {
    loading: boolean;
    auth?: Auth; // if have an auth object
}

export const AuthContext = React.createContext<Auth>({loggedIn: false});

export function useAuth(): Auth {
    return useContext(AuthContext);
}

export function useAuthInit(): AuthInit {
      //logging in function
  const [authInit, setAuthInit] = useState<AuthInit>({loading: true});
  useEffect(() => {
    return fireBaseAuth.onAuthStateChanged((firebaseUser) => {
      const auth = firebaseUser 
      ? {loggedIn: true, userId: firebaseUser.uid}
      : {loggedIn: false};
      setAuthInit({loading: false, auth});
    })
  }, []);
  return authInit;
}