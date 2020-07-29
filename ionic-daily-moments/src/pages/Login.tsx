import React, { useState } from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton, IonList, IonLabel, IonInput, IonText, IonLoading} from '@ionic/react';
import { Redirect } from 'react-router';
import {useAuth} from '../auth';
import {auth} from '../Firebase';

const Login: React.FC = () => {
    const {loggedIn} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState({loading: false, error: false});


    const handleLogin = async () => {
        try {
            setStatus({loading: true, error: false});
            const credential = await auth.signInWithEmailAndPassword(email, password);
            console.log('credential:', credential);
        } catch (error) {
            setStatus({loading: false, error: true});
            console.log('error:', error);
        }
        
    };

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
                <IonList>
                    <IonLabel position="stacked">Email</IonLabel>
                    <IonInput 
                        type="email" 
                        value={email}
                        onIonChange={(event) => setEmail(event.detail.value)}/>
                    <IonLabel position="stacked">Password</IonLabel>
                    <IonInput 
                        type="password"
                        value={password}
                        onIonChange={(event) => setPassword(event.detail.value)} />
                </IonList>
                {status.error &&
                    <IonText color="danger">Invalid credentials</IonText>}
            <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
            <IonLoading isOpen={status.loading}/>
            </IonContent>
        </IonPage>
    );
}

export default Login
