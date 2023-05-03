import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link className="navbar-brand text-light font-site" to="/">
                    <img src={Logo} alt="Logo" width="40" height="25" class="d-inline-block align-text-top" /><span className='ms-2 text-orange'>Paradise</span>Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-orange font-site" to="/login">Se connecter</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-orange font-site" to="/register">S'inscrcire</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
