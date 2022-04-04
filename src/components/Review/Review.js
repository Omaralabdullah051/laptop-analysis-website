import React from 'react';

const Review = (props) => {
    const { image, name, review, rating } = props.review;
    return (
        <div className='border-2 rounded p-3'>
            <img width={'400px'} height={'300px'} src={image} alt="" />
            <h5>Name: {name}</h5>
            <p>Reviews: {review}</p>
            <h5>Rating: {rating}</h5>
        </div>
    );
};

export default Review;