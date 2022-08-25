![](./icons8-football-48.png)
# **RESTful API de gestion des statistiques des joueurs de foot  _avec Node.js et express.js_**

---
## Contexte
Dans le cadre de la digitalisation de son système de gestion des statistiques des joueurs, nous avons conçu une solution répondant aux critères de performance suivant: 

- L'API passe les test GET, POST, PUT et DELETE sur [PostMan](https://www.postman.com/)

- Site deployé sur [Heroku](https://dashboard.heroku.com/)

## Technologies utilisées pour construire l'API:
- NodeJS
- Express.js - Framework Web rapide, sans opinion et minimaliste pour  Node.js

### Packages installés 
- nvm - Node version Manager 
- npm - Node Package Manager 
- Node.js
- Express installé avec npm (npm install express body-parser morgan).

---
## Comment utiliser l'API ?
Cette API peut:
- Créer et enregistrer les stats d'un joueur via **POST** <p style="background-color:yellow">https://git.heroku.com/lit-ravine-57639.git/api/V1/stats</p>

```JSON
// this is the input examples
  {
    "id": 23,
    "wins": 8,
    "losses": 2,
    "points_scored": 7
  }
// and it will return json file like this
  {
    "id": 23,
    "wins": 8,
    "losses": 2,
    "points_scored": 7
  }

```


- Obtenir les informarions d'un joueur à partir de son identifiant via **GET** <p style="background-color:yellow">https://lit-ravine-57639.herokuapp.com/api/v1/stats/101</p>

```JSON
// it will return json file like this
  {
    "id": 23,
    "wins": 8,
    "losses": 2,
    "points_scored": 7
  }
```

- Mettre à jour les informations d'un joueur existant via **PUT** <p style="background-color:yellow">https://lit-ravine-57639.herokuapp.com/api/v1/stats/101</p>

```JSON
// this the input 
  {
    "id": 23,
    "wins": 10,
    "losses": 3,
    "points_scored": 7
  }
// and it will return json file like this
{
    "id": 23,
    "wins": 10,
    "losses": 3,
    "points_scored": 7
  }
```
- Enfin supprimer les stats d'un joueur à travers **DELETE** <p style="background-color:yellow">https://lit-ravine-57639.herokuapp.com/api/v1/stats/101</p>

```JSON

// this the input 
  {
    "id": 101,
    "wins": 10,
    "losses": 3,
    "points_scored": 7
  }
// and it will return an empty json file

```