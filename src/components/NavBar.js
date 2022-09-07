import React from 'react';
import '../App';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/library'>Library</Link>
        <Link to='/comment'>Comment</Link>
    </div>
  );
};

export default NavBar