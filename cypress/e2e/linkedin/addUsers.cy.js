/// <reference types="cypress" />

require('cypress-xpath');

describe('Login Linkedin', () => {

  beforeEach(() => {
    cy.visit('https://www.linkedin.com/login/fr?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin')
  })

  it('displays two todo items by default', () => {

  })

})
