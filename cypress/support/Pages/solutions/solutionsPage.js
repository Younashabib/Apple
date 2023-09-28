/// <reference types ="Cypress" />

export class solutionPageLocator {
  get getsolutionpageLocator() {
    return cy.get('div[data-test-marker="Education"]').contains("Education");
  }
  get;
}
