/// <reference types = "Cypress" />

export class forIndvidualUseLocator {
  get getIndvidualUse() {
    return cy.get('a[href="/store/#personal"]').contains("For Individual Use");
  }
}
