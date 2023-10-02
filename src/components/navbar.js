import React from 'react';
import '../App.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <ul>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
            <Link className='navbar login' to="/login">Login</Link>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link className='navbar' to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Navbar;
