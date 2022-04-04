import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart1 = ({ data }) => {
    return (
        <div>
            <h3 className='font-semibold ml-44 text-cyan-700'>Month Wise Sell</h3>
            <LineChart width={600} height={350} data={data}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default Chart1;