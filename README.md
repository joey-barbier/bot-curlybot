# CurlyBot


## Introduction.

Pour envoyer des demandes de contact sur LinkedIn.

## Installation.

Installation des packages :

- `yarn install`


## Récupération des cookies de session.

Une fois connecté sur LinkedIn vous pouvez récupérer vos cookies de séssion grâce à une extension Chrome par exemple EditThisCookie (https://www.editthiscookie.com/).

Une fois fait, il vous suffit de mettre les cookies dans le fichier: `./cookies/linkedin.json`.
Pour ensuite supprimer les cookies ayant comme valeur `unspecified` sur la clé `sameSite`.


## URL de recherche.

Aller sur LinkedIn, puis effectuez votre recherche par exemple "iOS Lead Tech" une fois sur la page de recherche.
Cliquez sur "personnes" puis vous pouvez rajouter vos contraintes exemple, le pays ...

Par exemple : https://www.linkedin.com/search/results/people/?geoUrn=%5B%22105015875%22%5D&keywords=Responsable%20mobile%20iOS&origin=FACETED_SEARCH&sid=X3t


## Remplacer l'URL.

Ouvrez le fichier  : `cypress/e2e/linkedin/search.cy.js`
Vous pouvez remplacer `const url = '...'` par votre URL de recherche.


## Lancement de Cypress

Pour lancer Cypress il suffit d'éxécuter la commande : `yarn run cypress open`
(En cas d'erreur, il faut faire avant: `npm install Cypress`)

Une fenetre s'ouvre, cliquez sur `E2E Testing`, Chrome doit être selectionné puis cliquez sur `Start E2E Testing in Chrome`.

Vous pouvez lancer le bot en cliquant sur `search.cy.js`
Chrome se lance et le bot démarre.


🎉 ENJOY ! 