import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart1 = ({ data }) => {
    return (
        <div>
            <h3 className='text-base text-center md:text-3xl md:text-left font-semibold md:ml-44 text-cyan-700 mt-20 md:mt-0 mb-5'>Month Wise Sell</h3>
            <LineChart width={280} height={200} data={data}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default Chart1;