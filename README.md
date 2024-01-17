# CurlyBot

## Introduction

To send contact requests on LinkedIn.

## Installation

Installation of packages:

- `yarn install`

## Retrieving Session Cookies

Once logged in on LinkedIn, you can retrieve your session cookies using a Chrome extension, for example, EditThisCookie (https://www.editthiscookie.com/).
Once done, you just need to put the cookies in the file: `./cookies/linkedin.json`.

## Search URL

Go to LinkedIn, then perform your search, for example "iOS Lead Tech" once on the search page.
Click on "people" then you can add your constraints, for example, the country...

Your URL will start with: https://www.linkedin.com/search/results/people/...
For example: https://www.linkedin.com/search/results/people/?geoUrn=%5B%22105015875%22%5D&keywords=Responsable%20mobile%20iOS&origin=FACETED_SEARCH&sid=X3t

## Replacing the URL

Open the file: `cypress/e2e/linkedin/search.cy.js`
You can replace `const url = '...'` with your search URL.

## Launching Cypress

To launch Cypress, simply execute the command: `yarn run cypress open`
(In case of an error, you must do beforehand: `npm install Cypress`)

A window opens, click on `E2E Testing`, Chrome must be selected then click on `Start E2E Testing in Chrome` (you can select another browser).

Finally, you can launch the bot by clicking on `search.cy.js`
Chrome launches and the bot starts.

🎉 ENJOY !
