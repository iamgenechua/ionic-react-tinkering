import React from 'react';
import dayjs from 'dayjs'
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import BiorhythmChart from './BiorhythmChart'
import {calculateBiorhythms} from '../Calculations';


const formatDate = (isoString) => {
    return dayjs(isoString).format('D MMM YYYY');
}

const biorhythmCard = (props) => {
  const {physical, emotional, intellectual} = calculateBiorhythms(props.birthDate, props.targetDate);
    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
              <IonCardTitle>{formatDate(props.targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <BiorhythmChart birthDate={props.birthDate} targetDate={props.targetDate}/>
              <p style={{color: "red"}}>Physical: {physical}</p>
              <p style={{color: "blue"}}>Emotional: {emotional}</p>
              <p style={{color: "green"}}>Intellectual: {intellectual}</p>
            </IonCardContent>
          </IonCard>
    )
}

export default biorhythmCard;