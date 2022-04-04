import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Chart3 = ({ data }) => {
    return (
        <div>
            <h3 className='font-semibold ml-28 text-cyan-700'>Investment VS Revenue</h3>
            <BarChart width={600} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#82ca9d" />
                <Bar dataKey="investment" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Chart3;