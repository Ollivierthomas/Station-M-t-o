const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Définir le dossier des ressources statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la racine - servir index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour récupérer les données météorologiques (exemple)
app.get('/weather', async (req, res) => {
    try {
        const apiKey = 'ad40dfd977e64b35f51eaf106e940a8d';
        const city = req.query.city || 'Paris'; // Ville par défaut (Paris)
        const apiUrl = `https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`;
        // Ici, vous pouvez faire appel à votre API météo et renvoyer des données JSON
        res.json({ temperature: 20, description: 'Sunny' });
    } catch (error) {
        console.error('Erreur lors de la récupération des données météorologiques :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données météorologiques' });
    }
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
