const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'paradisemovies'
});

connection.connect();

const user = {
    nom: nom,
    prenom: prenom,
    email: email,
    motdepasse: motdepasse,
    datenaissance: datenaissance,
    mentionlegale: mentionlegale
};

const query = 'INSERT INTO utilisateurs SET ?';

connection.query(query, user, (error, results, fields) => {
    if (error) throw error;
    console.log('Utilisateur inséré avec succès');
});

connection.end();