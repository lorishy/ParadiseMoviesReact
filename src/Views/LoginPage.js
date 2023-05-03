import React, { useState } from "react";

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [motdepasse, setMotdepasse] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données du formulaire à un serveur ou effectuer une action en fonction des données saisies par l'utilisateur
        console.log('Email:', email);
        console.log('Mot de passe:', motdepasse);
        console.log('Rester connecté:', remember);
    }

    return (
        <div className="container mt-4">
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="motdepasse">Mot de passe :</label>
                    <input value={motdepasse} onChange={(e) => setMotdepasse(e.target.value)} type="password" className="form-control" id="password" required />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="remember" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                    <label className="form-check-label" htmlFor="remember">Rester connecté</label>
                </div>
                <button type="submit" className="btn btn-danger mt-3">Se connecter</button>
            </form>
        </div >
    )

} 