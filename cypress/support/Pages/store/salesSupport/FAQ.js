/// <reference types ="Cypress" />

export class frequentAskedQuestions {
  get getFAQLocator() {
    return cy.get('[data-test="main-submenu-item"]').contains("FAQ");
  }
}
