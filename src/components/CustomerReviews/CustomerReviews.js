import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h4 className='text-center'>Cutomer Revies(3)</h4>
            <div className='grid grid-cols-3 gap-6 p-8'>
                {
                    reviews.map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;