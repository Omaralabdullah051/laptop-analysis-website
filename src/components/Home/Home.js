import React from 'react';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const Home = () => {
    return (
        <div>
            <div>
                <img src="../../assets/images/lenovo-2.jpg" alt="" />
            </div>
            <div>
                <h2 className='font-bold text-slate-700'>Latest Laptop</h2>
                <h2 className='font-bold text-cyan-700 '>Top Brand</h2>
                <p className='text-justify'>Lenovo recently launched a latest laptop. It is no stranger to portable monitors, as we reviewed the ThinkVision M14t just over a year ago. At the time, we were impressed by its lightweight design, excellent color and touch capabilities (with stylus support). Knocks against the monitor included its expensive price tag ($449 MSRP) and limited connectivity options.</p>
            </div>
            <CustomerReviews></CustomerReviews>
            <button className='p-2 bg-gray-700 rounded'>See all Reviews</button>
        </div>
    );
};

export default Home;