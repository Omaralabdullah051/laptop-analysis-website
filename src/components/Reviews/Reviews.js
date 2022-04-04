import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div>
            <h3 className='text-center font-bold mt-5'>All Reviews</h3>
            <div className='md:grid md:grid-cols-3 md:gap-6 p-8'>
                {reviews.map(review => <Review review={review} key={review.id}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;