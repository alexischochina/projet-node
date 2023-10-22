# Boilerplate back-end avec Node.js
## Installer les dépendences :
```bash
npm install
```

## Lancer le projet :
```bash
npm start
```

## Dépendences ajoutées :

### - dotenv
Afin d'ajouter et de gérer facilement des variables d'environnement (logs de BDD, variables de préprod/prod).\
Pour ce faire, ajouter les variables dans le fichier .env à la racine du projet.\
Pour appeler une variable d'environnement :
```js
const varEnv = process.env.VAR_ENV;
```
### - passport
Afin de gérer l'authentification lorsqu'un utilisateur se connecte.

### - nodemon
Afin de relancer le serveur automatiquement à chaque modification du code