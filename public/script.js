document.addEventListener('DOMContentLoaded', () => {
    fetch('/weather') // Fait une requête GET vers /weather sur votre serveur Express
        .then(response => response.json()) // Convertit la réponse en JSON
        .then(data => {
            // Met à jour le contenu HTML avec les données météorologiques reçues
            document.getElementById('temp-value').textContent = data.temperature;
            document.getElementById('desc-value').textContent = data.description;
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données météorologiques :', error);
        });
});
