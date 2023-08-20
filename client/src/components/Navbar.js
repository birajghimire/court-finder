import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ isLoggedIn, setIsLoggedIn }) {

    return (
        <nav className="navbar">
            <Link to="/home" className="nav-link">Home</Link>

            {isLoggedIn ? (
                <>
                    <Link to="/add-court" className="nav-link">Add Court</Link>
                    <Link to="/profile" className="nav-link">Profile</Link>
                    <button onClick={() => setIsLoggedIn(false)} className="nav-link">Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login" className="nav-link">Login/Signup</Link>
                </>
            )}
        </nav>
    );
}

export default NavBar;
