import React from 'react';
import '../App.css';

const Blog = () => {
    const posts = ["Hello World", "Hello Again", "Hello Hello Hello"];
    return (
        posts.map((post, index) => {
            return (
                <div className='blog-post' key={index}>
                    <p>{post}</p>
                </div>
            );
        }
    ));
}

export default Blog;
