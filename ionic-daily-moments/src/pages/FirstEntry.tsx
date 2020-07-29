import React from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton} from '@ionic/react';
import { useParams } from 'react-router';
import {entries} from '../data';

interface RouteParams {
    id: string;
}

const FirstEntry: React.FC = () => {
    const {id} = useParams<RouteParams>();
    const entry = entries.find((entry) => entry.id === id);
    if (!entry) {
        throw new Error(`No such entry: ${id}`)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>{entry.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {entry.description}
            </IonContent>
        </IonPage>
    );
};

export default FirstEntry;
