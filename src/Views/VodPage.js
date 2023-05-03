import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

function VodPage() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Bienvenue sur la page VOD</h1>
                <p>Regardez les derniers films en ligne!</p>
            </div>
        </div>
    );
}

export default VodPage;