import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-center items-center bg-slate-700 h-16'>
            <CustomLink to='/'>HOME</CustomLink>
            <CustomLink to='/reviews'>REVIEWS</CustomLink>
            <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink to='/blogs'>BLOGS</CustomLink>
            <CustomLink to='/about'>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;