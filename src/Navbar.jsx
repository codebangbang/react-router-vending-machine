import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
    return (
        <nav className="Navbar">
            <ul>
            <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pop">Pop</Link>
                </li>
                <li>
                    <Link to="/chips">Chips</Link>
                </li>
                <li>
                    <Link to="/candy">Candy</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;