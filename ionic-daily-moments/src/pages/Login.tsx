import React from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton} from '@ionic/react';
import { Redirect } from 'react-router';
import {useAuth} from '../auth';

interface Props {
    onLogin: () => void; // onLogin is a function that doenst return anything
}

const Login: React.FC<Props> = ({onLogin}) => {
    const {loggedIn} = useAuth();
    if (loggedIn) {
        return <Redirect to="/my/home" />;
    }
    
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <IonButton expand="block" onClick={onLogin}>Login</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default Login
