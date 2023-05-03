import React, { useState } from "react";
import axios from 'axios';

function RegisterPage() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motdepasse, setMotdepasse] = useState('');
    const [motdepasseconfirm, setMotdepasseconfirm] = useState('');
    const [datenaissance, setDatenaissance] = useState('');
    const [mentionlegale, setMentionlegale] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { nom, prenom, email, motdepasse, datenaissance, mentionlegale };
        console.log(user);
        axios.post('../Api/LoginApi.js', user)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mt-4">
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label htmlFor="nom">Nom :</label>
                    <input value={nom} onChange={(e) => setNom(e.target.value)} type="text" className="form-control" id="nom" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="prenom">Prenom :</label>
                    <input value={prenom} onChange={(e) => setPrenom(e.target.value)} type="text" className="form-control" id="prenom" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email">Email :</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="motdepasse">Mot de passe :</label>
                    <input value={motdepasse} onChange={(e) => setMotdepasse(e.target.value)} type="password" className="form-control" id="motdepasse" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="motdepasseconfirm">Confirmer votre mot de passe :</label>
                    <input value={motdepasseconfirm} onChange={(e) => setMotdepasseconfirm(e.target.value)} type="password" className="form-control" id="motdepasseconfirm" />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="datenaissance">Date de naissance :</label>
                    <input value={datenaissance} onChange={(e) => setDatenaissance(e.target.value)} type="date" className="form-control" id="datenaissance" />
                </div>
                <div className="form-check mt-3">
                    <input value={mentionlegale} onChange={(e) => setMentionlegale(e.target.value)} type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">J'accepte la politique de confidentialité</label>
                </div>
                <button type="submit" className="btn btn-danger mt-3">Se conencter</button>
            </form>
        </div >
    );
};

export default RegisterPage;
