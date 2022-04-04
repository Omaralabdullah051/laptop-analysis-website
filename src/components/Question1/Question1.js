import React from 'react';

const Question1 = () => {
    return (
        <div className='mt-10'>
            <h3 className='text-cyan-500 font-bold text-center'>What is Context API?</h3>
            <h5 className='font-semibold p-6 text-justify'>React is all about a beautiful pattern. There are many patterns to pass states and functionality from parent component to child component. Context API is one of them. Context API is nothing but a pattern, which helps us to pass the states and functionality from parent component to exact child component who exactly need to use these states and functionality without having to pass props down manually at every level. Lifting State up, Higher order component, Render props pattern is also that kind of pattern in React. But in lifting state up pattern there is a prop drilling issue that means we need to pass props down manually at every level. By using higher order component and render props pattern we can avoid prop drilling issue but can't fix the issue. The only way to fix the issue is Context API. Now in functional component we can use useContext() hook that made our work so much easier. It is very much helpful in large application.</h5>
        </div>
    );
};

export default Question1;