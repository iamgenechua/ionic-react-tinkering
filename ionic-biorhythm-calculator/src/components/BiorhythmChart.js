import React from 'react';
import {
    ResponsiveContainer, LineChart, Line, XAxis
} from 'recharts';
import dayjs from 'dayjs';
import {calculateBiorhythmSeries} from '../Calculations';


const biorhythmChart = (props) => {
    const startDate = dayjs(props.targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(props.birthDate, startDate, 31)
        .map(item => ({...item, date: dayjs(item.date).format('D MMM')}));
    return (
        <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}>
                <XAxis ticks={data}/>
                <Line type="natural" dot={false} dataKey="physical" stroke="red"/>
                <Line type="natural" dot={false} dataKey="emotional" stroke="blue"/>
                <Line type="natural" dot={false} dataKey="intellectual" stroke="green"/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default biorhythmChart;