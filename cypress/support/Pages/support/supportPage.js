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

  get cartSectionLocator() {
    return cy.get('div[class="wt-card__section"]');
  }

  get intelliJIDEA() {
    this.cartSectionLocator.contains("IntelliJ IDEA");
    this.cartSectionLocator.contains("The Leading Java and Kotlin IDE");
    this.cartSectionLocator.contains("IntelliJ IDEA");
  }
  get reSharper() {
    this.cartSectionLocator.contains("ReSharper");
    this.cartSectionLocator.contains(
      "Visual Studio extension for .NET developers"
    );
  }
  get TeamCity() {
    this.cartSectionLocator.contains("TeamCity");
    this.cartSectionLocator.contains(
      "Build management and Continuous Integration server"
    );
  }
  get IDEsHeading() {
    cy.get('h2[class="wt-h2 wt-h2_theme_dark wt-h2_flow"]').contains(
      "Integrated Development Environments (IDEs)"
    );
  }

  get NETandVisualStudioHeading() {
    cy.get('h2[class="wt-h2 wt-h2_theme_dark wt-h2_flow"]').contains(
      ".NET and Visual Studio"
    );
  }
}
