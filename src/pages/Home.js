import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../components/blog';
const Home = () => {
    return (
        <>
        <div className='container'>          
        <Link className='button' to="/create">Create a new Blog</Link>
        <Blog/>
        </div>
        </>
        
    );
}

export default Home;
