import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/HomePage.css';

function HomePage() {
    return (
        <div className="containerhp">
            <div className="orange-sectionhp">
                <Link to="/cinema">
                    <button className='buttonhp shadow rounded'>Cinéma</button>
                </Link>
            </div>
            <div className="grey-sectionhp">
                <Link to="/vodportail">
                    <button className='buttonhp shadow rounded'>Films/Séries</button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
