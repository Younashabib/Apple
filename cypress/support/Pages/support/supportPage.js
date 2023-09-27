/// <reference types = "Cypress" />

export class supportPageLocator {
  get getSupportPageLocator() {
    return cy.get('a[href="/support/"]').contains("Support Center");
  }

  get verifyHeader() {
    cy.get('h1[class="wt-h1 wt-h1_flow wt-h1_theme_dark"]').contains(
      "Product Support"
    );
  }
  get textOfThePage() {
    cy.get('p[class="wt-subtitle-2 wt-subtitle-2_flow"]').contains(
      "Need help with JetBrains products?"
    );
  }
  get intelliJIDEA() {
    cy.get('div[class="wt-card__section"]').contains("IntelliJ IDEA");
    cy.get('div[class="wt-card__section"]').contains(
      "The Leading Java and Kotlin IDE"
    );
    cy.get('div[class="wt-card__section"]').contains("IntelliJ IDEA");
  }
}
