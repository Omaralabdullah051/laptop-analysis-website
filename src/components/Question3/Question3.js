import React from 'react';

const Question3 = () => {
    return (
        <div className='mt-10 mb-10'>
            <h3 className='text-2xl md:text-4xl text-cyan-500 font-bold text-center'>What's the difference between inline-block and inline element?</h3>
            <h5 className='text-xs md:text-xl font-semibold p-6 text-justify'>There are so much confusing tags in html. The elements are inline element, block element and inline-block element. Inline element only consume enought width that is important to it. It doens't start from the new line. It starts where the previous element is finished. It doens't have top and bottom margins. The a, br,  script, input, img, span, etc are inline elements. Block element starts from a new line and consume more width as much as possible. It has top and bottom margins. The block elements are h1-h6, div, ul, ol, p, etc. On the other hand, the significant element is inline-block element. The specifity of the inline-block element is it consume specified width and height.It has top and bottom margin. But it doens't start from a new line.</h5>

        </div>
    );
};

export default Question3;