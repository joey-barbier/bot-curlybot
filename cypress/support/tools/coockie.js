Cypress.Commands.add("saveCookies", () => {
    cy.getCookies().then((cookies) => {
        const json = JSON.stringify(cookies);
        cy.fileName().then(data => {
            cy.writeFile("cookies/" + data + ".json", json);
        })
    })
})

Cypress.Commands.add("setCookies", () => {
    cy.readFile('cookies/linkedin.json').then(cookies => {
        console.log("Set cookies")
        console.log("Count of cookies : " + cookies.length)
        Cypress.$.each(cookies, function (_, cookie) {
            if (cookie.sameSite === "unspecified") {
                return;
            }
            cy.setCookie(cookie.name, cookie.value, cookie)
        })
    })
})