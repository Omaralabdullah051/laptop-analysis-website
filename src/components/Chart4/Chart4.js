import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Chart4 = ({ data }) => {
    return (
        <div>
            <h3 className='font-semibold ml-28 text-cyan-700'>Investment VS Revenue</h3>
            <PieChart width={600} height={350}>
                <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Chart4;