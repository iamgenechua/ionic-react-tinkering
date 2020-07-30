import React, { useEffect, useState } from 'react';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonButton, IonIcon} from '@ionic/react';
import { useParams, useHistory } from 'react-router';
import {firestore} from '../Firebase';
import {Entry, toEntry} from '../models';
import { useAuth } from '../auth';
import {trash} from 'ionicons/icons';

interface RouteParams {
    id: string;
}

const FirstEntry: React.FC = () => {
    const {userId} = useAuth();
    const history = useHistory();
    const {id} = useParams<RouteParams>();
    const [entry, setEntry] = useState<Entry>();
    useEffect(() => {
        const entryRef = firestore
            .collection('users')
            .doc(userId)
            .collection('todos').doc(id);

        entryRef.get().then((doc) => setEntry(toEntry(doc)));
    }, [userId, id]);

    const handleDelete = async () => {
        const entryRef = firestore
            .collection('users')
            .doc(userId)
            .collection('todos').doc(id);
            await entryRef.delete();
        history.goBack();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>{entry?.title}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleDelete}>
                            <IonIcon icon={trash} slot="icon-only"></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {entry?.description}
            </IonContent>
        </IonPage>
    );
};

export default FirstEntry;
