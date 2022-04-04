import React from 'react';

const Review = (props) => {
    const { image, name, review, rating } = props.review;
    return (
        <div className='border-2 rounded p-3 relative'>
            <img className='w-full h-4/5' src={image} alt="" />
            <div className='mt-5 ml-4'>
                <h5>Name: {name}</h5>
                <p>Reviews: {review}</p>
                <h5 className='absolute bottom-4'>Rating: {rating}</h5>
            </div>
        </div>
    );
};

export default Review;