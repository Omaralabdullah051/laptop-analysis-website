import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerReviews from '../CustomerReviews/CustomerReviews';

const Home = () => {
    const navigate = useNavigate();
    const navigateToReviewsRoute = () => {
        navigate('/reviews');
    }
    const navigateToInfoRoute = () => {
        navigate('/info');
    }
    return (
        <div>
            <div className='md:grid md:grid-cols-2 gap-16 md:pl-52'>
                <div className='md:mt-40'>
                    <h1 className='font-bold text-slate-700'>Latest Laptop</h1>
                    <h1 className='font-bold text-cyan-700 '>Top Brand</h1>
                    <p className='text-justify mt-5 font-semibold'>Lenovo recently launched a latest laptop. It is no stranger to portable monitors, as we reviewed the ThinkVision M14t just over a year ago. At the time, we were impressed by its lightweight design, excellent color and touch capabilities (with stylus support). Knocks against the monitor included its expensive price tag ($449 MSRP) and limited connectivity options.</p>
                    <button onClick={navigateToInfoRoute} className='py-2 bg-gray-700 rounded text-gray-50 px-4 mt-2'>See Detail</button>
                </div>
                <div className='place-self-end'>
                    <img src="https://images.unsplash.com/photo-1609240873613-95b7d2f1522f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>
            </div>
            <CustomerReviews></CustomerReviews>
            <div className='grid mb-20'>
                <button onClick={navigateToReviewsRoute} className='py-2 px-4 text-gray-50 bg-gray-700 rounded place-self-center'>See all Reviews</button>
            </div>
        </div >
    );
};

export default Home;