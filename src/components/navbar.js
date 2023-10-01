import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <button className='navbar'>Home</button>
            <button className='navbar'>About</button>
            <button className='navbar'>Contact</button>
            <button className='navbar login'>Login</button>
        </div>
    );
}

export default Navbar;
