import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const CustomerReviews = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div className='md:mt-20'>
            <h4 className='text-center font-semibold'>Cutomer Revies(3)</h4>
            <div className='md:grid md:grid-cols-3 md:gap-6 p-8'>
                {
                    reviews.slice(0, 3).map(review => <Review review={review} key={review.id}></Review>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;