const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers statiques (comme index.html, styles.css)
app.use(express.static('public'));

// Endpoint pour la soumission de carte
app.post('/submit-card', (req, res) => {
  const { cardName, serviceType, 'card-image-base64': cardImageBase64 } = req.body;

  // Vérification que toutes les informations sont présentes
  if (!cardName || !serviceType || !cardImageBase64) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  console.log('Carte soumise :');
  console.log('Nom de la carte:', cardName);
  console.log('Service choisi:', serviceType);
  console.log('Image de la carte (Base64):', cardImageBase64.substring(0, 100)); // Affiche les 100 premiers caractères de l'image

  // Envoi d'une réponse de succès
  res.status(200).json({ message: 'Carte soumise avec succès !' });
});

// Démarre le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
