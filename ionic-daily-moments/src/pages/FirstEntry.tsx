import React, { useEffect, useState } from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton} from '@ionic/react';
import { useParams } from 'react-router';
import {firestore} from '../Firebase';
import {Entry, toEntry} from '../models';
import { useAuth } from '../auth';

interface RouteParams {
    id: string;
}

const FirstEntry: React.FC = () => {
    const {userId} = useAuth();
    const {id} = useParams<RouteParams>();
    const [entry, setEntry] = useState<Entry>();
    useEffect(() => {
        const entryRef = firestore
            .collection('users')
            .doc(userId)
            .collection('todos').doc(id);
        entryRef.get().then((doc) => setEntry(toEntry(doc)));
    }, [userId, id]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>{entry?.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {entry?.description}
            </IonContent>
        </IonPage>
    );
};

export default FirstEntry;
