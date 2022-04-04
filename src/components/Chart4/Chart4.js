import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Chart4 = ({ data }) => {
    return (
        <div>
            <h3 className='text-base text-center md:text-3xl md:text-left font-semibold md:ml-28 text-cyan-700 mt-20 md:mt-0 mb-5'>Investment VS Revenue</h3>
            <PieChart width={300} height={200}>
                <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Chart4;