/// <reference types="cypress" />

require('cypress-xpath');

describe('Login Linkedin', () => {

    let configuration = {};

    before(() => {
        cy.getConfig().then((data) => {
            configuration = data;
        });

        cy.origin('https://www.linkedin.com/', () => {
            cy.visit('https://www.linkedin.com/login/fr?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin').then(_ => {
            });
        });
    })

    it('input login', () => {

        cy.xpath('//input[@id=\'username\']').type(configuration.username)
        cy.wait(1000);
    })

    it('input password', () => {
        cy.xpath('//input[@id=\'password\']').type(configuration.password)
        cy.wait(5000);
    })

    it('send form', () => {
        cy.xpath('//form//button[@type="submit"]').click();
    })
})
