import React, { useEffect, useState } from 'react';
import Chart1 from '../Chart1/Chart1';
import Chart2 from '../Chart2.js/Chart2';
import Chart3 from '../Chart3/Chart3';
import Chart4 from '../Chart4/Chart4';


const DashBoard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='md:grid md:grid-cols-2 mt-5 mb-5 p-2 md:p-10 gap-10' >
            {<Chart1 data={data} />}
            {<Chart2 data={data} />}
            {<Chart3 data={data} />}
            {<Chart4 data={data} />}
        </div >
    );
};

export default DashBoard;