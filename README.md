# GROUPE
Anthony Lopes
Florian Decodts


# Library-API

API Node.js Express avec MongoDB/Mongoose pour la gestion d’une bibliothèque.

## Fonctionnalités

- CRUD sur les livres, utilisateurs, prêts
- Recherche avancée (filtres, recherche plein texte)
- Statistiques sur les livres (par genre, langue, auteur, etc.)
- Gestion des prêts et des livres empruntés

## Installation

1. Clone le repo :
   ```sh
   git clone <repo-url>
   cd api-mongodb-pokemon
   ```
2. Installe les dépendances :
   ```sh
   npm install
   ```
3. Configure le fichier `.env` :
   ```
   MONGO_URI=mongodb://localhost:27017/library
   ```

## Lancement

```sh
npm run dev
```
ou
```sh
node app.js
```

## Seed de la base

Pour remplir la base avec des données de test :
```sh
node seed/index.js
```

## Endpoints principaux

- `GET /books` : liste des livres
- `GET /books/filter` : recherche avancée (ex : `/books/filter?title=Gatsby&type=Fiction`)
- `GET /books/stats` : statistiques sur les livres
- `POST /books` : ajouter un livre
- `PUT /books/:id` : modifier un livre
- `DELETE /books/:id` : supprimer un livre

- `GET /users` : liste des utilisateurs
- `GET /users/with-loans` : utilisateurs ayant emprunté un livre

- `GET /loans` : liste des prêts
- `GET /users/loans/current` : prêts en cours

## Statistiques disponibles

- Nombre total de livres
- Nombre de livres par type
- Livre le plus long/court
- Moyenne de pages par livre
- Auteur le plus publié
- Nombre de livres prêtés
- Nombre de langues différentes

## Exemple de recherche

- Par titre : `/books/filter?title=Gatsby`
- Par auteur : `/books/filter?author=Orwell`
- Recherche plein texte : `/books/filter?q=surveillance`
- Par langue : `/books/filter?language=French`

## Technologies

- Node.js / Express
- MongoDB / Mongoose

---

**Projet pédagogique - A3 NoSQL**# library-Api
