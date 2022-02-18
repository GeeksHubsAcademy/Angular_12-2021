// <reference types="Cypress" />

it('should visit home', () => {
  cy.visit('http://localhost:4200');
})

// <reference types="Cypress" />
it('should get h1', () => {
  cy.visit('http://localhost:4200');
  cy.get('h1').contains('Rick & Morty APP');
});

